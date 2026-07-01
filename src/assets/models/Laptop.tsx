import { useEffect, useMemo, useRef } from "react";
import type { ComponentPropsWithoutRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Group, MeshStandardMaterial } from "three";
import { SkeletonUtils } from "three-stdlib";
import * as THREE from "three";

const Model = (props: ComponentPropsWithoutRef<"group">) => {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF("/laptop.gltf");
  const { actions } = useAnimations(animations, group);
  const clonedScene = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const silverMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        color: "#d8d8d8",
        metalness: 0.95,
        roughness: 0.18,
        emissive: "#000000",
      }),
    [],
  );

  useEffect(() => {
    const action = actions?.Animation;

    if (!action) return;

    const a = action;

    a.reset();
    a.setLoop(THREE.LoopOnce, 1);
    a.play();

    setTimeout(() => {
      a.clampWhenFinished = true;
    }, 0);
  }, [actions]);

  useMemo(() => {
    clonedScene.traverse((child) => {
      if ("isMesh" in child && child.isMesh) {
        const mesh = child as unknown as {
          material: MeshStandardMaterial;
        };
        mesh.material = silverMaterial;
      }
    });
  }, [clonedScene, silverMaterial]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, -0.15, 0]} scale={[0.6, 0.6, 0.6]}>
        <group rotation={[0.25, 0, 0]} position={[0, 0.15, 0.1]}>
          <primitive object={clonedScene} />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/laptop.gltf");
export { Model };
