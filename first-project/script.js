import * as THREE from 'three'


const canvas = document.querySelector('canvas.webgl')

const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry(1, 1, 1)


const material = new THREE.MeshBasicMaterial({ color: 'red'})

const mesh = new THREE.Mesh(geometry, material)
// Position
mesh.position.x = 1
// Scale
mesh.scale.x = 1
// Rotation
mesh.rotation.y = Math.PI * 0.25
scene.add(mesh)

const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)

const sizes = {
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.lookAt(mesh.position)

scene.add(camera)

const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width, sizes.height)

const clock = new THREE.Clock()

// Animation
const tick = () => {
    const elapsedTime = clock.getElapsedTime()


    mesh.rotation.y = elapsedTime * Math.PI * 2/5
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()