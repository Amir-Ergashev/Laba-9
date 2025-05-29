import { useRef, useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import {
  Holistic,
  POSE_CONNECTIONS,
  Results,
} from '@mediapipe/holistic'
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils'
import { Camera } from '@mediapipe/camera_utils'

const MPStart = () => {
  const webcamRef = useRef<Webcam>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ball = useRef({ x: Math.random() * 0.9 + 0.05, y: 0, radius: 20 })
  const [score, setScore] = useState(0)

  useEffect(() => {
    const holistic = new Holistic({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`,
    })

    holistic.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    })

    holistic.onResults(onResults)

    let camera: Camera | null = null

    if (webcamRef.current !== null) {
      camera = new Camera(webcamRef.current.video!, {
        onFrame: async () => {
          await holistic.send({ image: webcamRef.current!.video! })
        },
        width: 1280,
        height: 720,
      })
      camera.start()
    }

    return () => {
      camera?.stop()
      holistic.close()
    }
  }, [])

  const onResults = (results: Results) => {
    if (!canvasRef.current) return
    const canvasCtx = canvasRef.current.getContext('2d')
    if (!canvasCtx) return

    canvasCtx.save()
    canvasCtx.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    )

    canvasCtx.drawImage(
      results.image,
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    )

    if (results.poseLandmarks) {
      drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS, {
        color: 'white',
        lineWidth: 4,
      })
      drawLandmarks(canvasCtx, results.poseLandmarks, {
        color: 'orange',
        lineWidth: 2,
      })
    }

    ball.current.y += 0.01
    if (ball.current.y > 1) {
      ball.current.x = Math.random() * 0.9 + 0.05
      ball.current.y = 0
    }

    if (results.poseLandmarks) {
      const leftHand = results.poseLandmarks[15]
      const rightHand = results.poseLandmarks[16]

      const distance = (a: any, b: any) =>
        Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2)

      const radiusNorm = 0.05

      if (
        distance(ball.current, leftHand) < radiusNorm ||
        distance(ball.current, rightHand) < radiusNorm
      ) {
        setScore((prev) => prev + 1)
        ball.current.x = Math.random() * 0.9 + 0.05
        ball.current.y = 0
      }
    }

    const virtualLandmark = {
      x: ball.current.x,
      y: ball.current.y,
      z: 0,
      visibility: 1,
    }

    drawLandmarks(canvasCtx, [virtualLandmark], {
      color: 'lime',
      fillColor: 'lime',
      lineWidth: 20,
    })

    canvasCtx.restore()
  }

  return (
    <div
      style={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '2rem',
      }}
    >
      <div
        style={{
          marginBottom: '2rem',
          textAlign: 'center',
          transform: 'translateY(-30px)',
        }}
      >
        <h1 style={{ fontSize: '4rem' }}>Игра на реакцию</h1>
        <h2 style={{ fontSize: '1.5rem' }}>Добро пожаловать в игру!</h2>
        <h3 style={{ fontSize: '2rem', marginTop: '1rem' }}>Очки: {score}</h3>
      </div>

      <div
        style={{
          position: 'relative',
          width: '90vw',
          height: '70vh',
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        <Webcam
          audio={false}
          mirrored
          ref={webcamRef}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 0,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
        <canvas
          ref={canvasRef}
          width={1280}
          height={720}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 1,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
      </div>
    </div>
  )
}

export default MPStart