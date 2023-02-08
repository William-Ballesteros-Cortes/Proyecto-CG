import create from 'zustand'
import { nanoid } from 'nanoid' 

export const useStore = create((set) => ({
    texture:'dirt',
    cubes: [
        // U
    {
        key: nanoid(),
        pos: [-5, 1, -10],
        texture: 'dirt',
    },
    {
        key: nanoid(),
        pos: [-5, 2, -10],
        texture: 'dirt',
    },
    {
        key: nanoid(),
        pos: [-5, 3, -10],
        texture: 'dirt',
    },
    {
        key: nanoid(),
        pos: [-5, 4, -10],
        texture: 'dirt',
    },
    {
        key: nanoid(),
        pos: [-5, 5, -10],
        texture: 'dirt',
    },
    {
        key: nanoid(),
        pos: [-5, 6, -10],
        texture: 'dirt',
    },
    {
        key: nanoid(),
        pos: [-4, 1, -10],
        texture: 'dirt',
    },
    {
        key: nanoid(),
        pos: [-3, 1, -10],
        texture: 'dirt',
    },
    {
        key: nanoid(),
        pos: [-2, 1, -10],
        texture: 'dirt',
    },
    {
        key: nanoid(),
        pos: [-1, 1, -10],
        texture: 'dirt',
    },
    {
        key: nanoid(),
        pos: [-1, 2, -10],
        texture: 'dirt',
    },
    {
        key: nanoid(),
        pos: [-1, 3, -10],
        texture: 'dirt',
    },
    {
        key: nanoid(),
        pos: [-1, 4, -10],
        texture: 'dirt',
    },
    {
        key: nanoid(),
        pos: [-1, 5, -10],
        texture: 'dirt',
    },
    {
        key: nanoid(),
        pos: [-1, 6, -10],
        texture: 'dirt',
    },
    // V
    {
        key: nanoid(),
        pos: [4, 1, -10],
        texture: 'dirt',
    },
    {
        key: nanoid(),
        pos: [3, 3, -10],
        texture: 'dirt',
    },
    {
        key: nanoid(),
        pos: [5, 3, -10],
        texture: 'dirt',
    },
    {
        key: nanoid(),
        pos: [2, 5, -10],
        texture: 'dirt',
    },
    {
        key: nanoid(),
        pos: [6, 5, -10],
        texture: 'dirt',
    },
    {
        key: nanoid(),
        pos: [4, 2, -10],
        texture: 'dirt',
    },
    {
        key: nanoid(),
        pos: [2, 6, -10],
        texture: 'dirt',
    },
    {
        key: nanoid(),
        pos: [6, 6, -10],
        texture: 'dirt',
    },
    {
        key: nanoid(),
        pos: [3, 4, -10],
        texture: 'dirt',
    },
    {
        key: nanoid(),
        pos: [5, 4, -10],
        texture: 'dirt',
    },

],
    addCube: (x, y, z) => {
        set((prev) => ({
            cubes: [
                ...prev.cubes,
                {
                    key: nanoid(),
                    pos: [x,y,z],
                    texture: prev.texture
                }
            ]
        }))
    },
    removeCube: (x, y, z) => {
        set((prev) => ({
            cubes: prev.cubes.filter(cube => {
                const[X,Y,Z] = cube.pos
                return X != x || Y != y || Z != z
            })
        }))
    },
    setTexture: () => {},
    saveWorld: () => {},
    resetWorld: () => {},
}))