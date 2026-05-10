import * as THREE from 'three'

export default function initScene(containerId = 'three-container') {
  const container = document.getElementById(containerId)
  if (!container || container.dataset.initialized) return

  container.dataset.initialized = 'true'

  const scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(0x050510, 0.0004)

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 40

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(0x000000, 0)
  container.appendChild(renderer.domElement)

  const count = 2500
  const geo = new THREE.BufferGeometry()
  const pos = new Float32Array(count * 3)
  const cols = new Float32Array(count * 3)
  const sizes = new Float32Array(count)

  const c1 = new THREE.Color('#00d4ff')
  const c2 = new THREE.Color('#7c3aed')
  const c3 = new THREE.Color('#00f5d4')

  for (let i = 0; i < count; i++) {
    const r = 40 + Math.random() * 100
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    pos[i * 3 + 1] = r * Math.cos(phi)
    pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)

    const pick = Math.random()
    const col = pick < 0.4 ? c1 : pick < 0.7 ? c2 : c3
    const c = col.clone().multiplyScalar(0.3 + Math.random() * 0.7)
    cols[i * 3] = c.r; cols[i * 3 + 1] = c.g; cols[i * 3 + 2] = c.b
    sizes[i] = 0.3 + Math.random() * 1.2
  }

  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  geo.setAttribute('color', new THREE.BufferAttribute(cols, 3))
  geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

  const canvas = document.createElement('canvas')
  canvas.width = 64; canvas.height = 64
  const ctx = canvas.getContext('2d')
  const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
  grad.addColorStop(0, 'rgba(255,255,255,1)')
  grad.addColorStop(0.15, 'rgba(255,255,255,0.8)')
  grad.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, 64, 64)
  const tex = new THREE.CanvasTexture(canvas)

  const mat = new THREE.PointsMaterial({
    size: 0.22,
    map: tex,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    transparent: true,
    vertexColors: true,
    opacity: 0.7,
  })

  const pts = new THREE.Points(geo, mat)
  scene.add(pts)

  const tGeo = new THREE.TorusKnotGeometry(2.8, 1, 96, 12)
  const tMat = new THREE.MeshBasicMaterial({ color: 0x00d4ff, wireframe: true, transparent: true, opacity: 0.1 })
  const knot = new THREE.Mesh(tGeo, tMat)
  knot.position.z = -8
  scene.add(knot)

  const rGeo = new THREE.TorusGeometry(2.6, 0.06, 24, 48)
  const rMat = new THREE.MeshBasicMaterial({ color: 0x7c3aed, transparent: true, opacity: 0.08 })
  const ring = new THREE.Mesh(rGeo, rMat)
  ring.position.z = -8
  ring.rotation.x = Math.PI / 3
  scene.add(ring)

  const mouse = { x: 0, y: 0 }
  const target = { x: 0, y: 0 }

  const onMove = (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
  }
  document.addEventListener('mousemove', onMove)

  const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
  window.addEventListener('resize', onResize)

  let running = true

  function animate() {
    if (!running) return
    requestAnimationFrame(animate)

    target.x += (mouse.x - target.x) * 0.02
    target.y += (mouse.y - target.y) * 0.02

    pts.rotation.y += 0.0003
    pts.rotation.x += 0.0001
    knot.rotation.x += 0.004
    knot.rotation.y += 0.007
    ring.rotation.x += 0.003
    ring.rotation.z += 0.002

    camera.position.x += (target.x * 3 - camera.position.x) * 0.02
    camera.position.y += (target.y * 2 - camera.position.y) * 0.02
    camera.lookAt(scene.position)

    renderer.render(scene, camera)
  }

  animate()

  return () => {
    running = false
    document.removeEventListener('mousemove', onMove)
    window.removeEventListener('resize', onResize)
    renderer.dispose()
    container.removeChild(renderer.domElement)
  }
}
