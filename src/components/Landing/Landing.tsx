import * as THREE from 'three'
import { Suspense, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Preload, Image as ImageImpl, useTexture } from '@react-three/drei'
import { ScrollControls, Scroll, useScroll } from './ScrollControls'

function Image(props) {
    const ref = useRef()
    const group = useRef()
    const data = useScroll()
    const texture = useTexture(props.url)
    useFrame((state, delta) => {
        group.current.position.z = THREE.MathUtils.damp(group.current.position.z, Math.max(0, data.delta * 500), 4, delta)
        group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, Math.max(0, data.delta * THREE.MathUtils.degToRad(2000)), 4, delta);
        // ref.current.material.grayscale = THREE.MathUtils.damp(ref.current.material.grayscale, Math.max(0, 1 - data.delta * 1000), 4, delta)
    })
    return (
        <group ref={group}  >
            {/* <ImageImpl ref={ref} {...props} /> */}
            <mesh position={props.position}>
                <boxGeometry args={[4, 4, 0.05]} />
                <meshStandardMaterial
                    map={texture}
                />
            </mesh>
        </group>
    )
}

function Page({ m = 0.4, urls, ...props }) {
    const { width } = useThree((state) => state.viewport)
    const w = width < 10 ? 1.5 / 3 : 1 / 3
    return (
        <group {...props}>
            <Image position={[-width * w, 0, -1]} scale={[width * w - m * 2, 5, 1]} url={urls[0]} />
            <Image position={[0, 0, 0]} scale={[width * w - m * 2, 5, 1]} url={urls[1]} />
            <Image position={[width * w, 0, 1]} scale={[width * w - m * 2, 5, 1]} url={urls[2]} />
        </group>
    )
}

function Pages() {
    const { width } = useThree((state) => state.viewport)
    return (
        <>
            <Page position={[-width * 1, 0, 0]} urls={['/imgs/w (12).jpeg', '/imgs/w (10).jpeg', '/imgs/w (9).jpeg']} />
            <Page position={[width * 0, 0, 0]} urls={['/imgs/w (2).jpeg', '/imgs/w (5).jpeg', '/imgs/w (2).jpeg']} />
            <Page position={[width * 1, 0, 0]} urls={['/imgs/w (8).jpeg', '/imgs/w (2).jpeg', '/imgs/w (12).jpeg']} />
            <Page position={[width * 2, 0, 0]} urls={['/imgs/w (5).jpeg', '/imgs/w (12).jpeg', '/imgs/w (8).jpeg']} />
            <Page position={[width * 3, 0, 0]} urls={['/imgs/w (2).jpeg', '/imgs/w (9).jpeg', '/imgs/w (5).jpeg']} />
            <Page position={[width * 4, 0, 0]} urls={['/imgs/w (9).jpeg', '/imgs/w (2).jpeg', '/imgs/w (2).jpeg']} />
        </>
    )
}



export default function Landing() {
    return (
        <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
            <Suspense fallback={null}>

                <ScrollControls infinite horizontal damping={4} pages={4} distance={1}>
                    <directionalLight rotation={[45, 0, 0]} intensity={2} position={[0, 0, 5]} />

                    <Scroll>

                        <Pages />
                    </Scroll>
                    <Scroll html>
                        <h1 className='' style={{ fontSize: "20em", color: "white", position: 'absolute', top: '20vh', left: '-75vw' }}>Weird</h1>
                        <h1 className='' style={{ fontSize: "20em", color: "white", position: 'absolute', top: '20vh', left: '25vw' }}>Music</h1>
                        <h1 className='' style={{ fontSize: "20em", color: "white", position: 'absolute', top: '20vh', left: '125vw' }}>For</h1>
                        <h1 className='' style={{ fontSize: "20em", color: "white", position: 'absolute', top: '20vh', left: '225vw' }}>Weird</h1>
                        <h1 className='' style={{ fontSize: "20em", color: "white", position: 'absolute', top: '20vh', left: '325vw' }}>people</h1>
                        <h1 className='' style={{ fontSize: "20em", color: "white", position: 'absolute', top: '20vh', left: '425vw' }}>&</h1>
                    </Scroll>
                </ScrollControls>
                <Preload />
            </Suspense>
        </Canvas>
    )
}
