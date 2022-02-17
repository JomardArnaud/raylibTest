import { Camera } from "./types/camera";
import { Texture2D } from "./types/texture";
import { Matrix } from "./types/maths";
import { VrDeviceInfo } from "./types/misc";
import { Shader } from "./types/shaders";
export default interface Shaders {
    LoadText: (fileName: string) => string;
    LoadShader: (vsFileName: string, fsFileName: string) => Shader;
    LoadShaderCode: (vsCode: string, fsCode: string) => Shader;
    UnloadShader: (shader: Shader) => void;
    GetShaderDefault: () => Shader;
    GetTextureDefault: () => Texture2D;
    GetShaderLocation: (shader: Shader, uniformName: string) => number;
    SetShaderValue: (shader: Shader, uniformLoc: number, value: any, uniformType: number) => void;
    SetShaderValueV: (shader: Shader, uniformLoc: number, value: any, uniformType: number, count: number) => void;
    SetShaderValueMatrix: (shader: Shader, uniformLoc: number, mat: Matrix) => void;
    SetShaderValueTexture: (shader: Shader, uniformLoc: number, texture: Texture2D) => void;
    SetMatrixProjection: (proj: Matrix) => void;
    SetMatrixModelview: (view: Matrix) => void;
    GetMatrixModelview: () => Matrix;
    BeginShaderMode: (shader: Shader) => void;
    EndShaderMode: () => void;
    BeginBlendMode: (mode: number) => void;
    EndBlendMode: () => void;
    BeginScissorMode: (x: number, y: number, width: number, height: number) => void;
    EndScissorMode: () => void;
    InitVrSimulator: () => void;
    CloseVrSimulator: () => void;
    UpdateVrTracking: (camera: Camera) => void;
    SetVrConfiguration: (info: VrDeviceInfo, distortion: Shader) => void;
    IsVrSimulatorReady: () => boolean;
    ToggleVrMode: () => void;
    BeginVrDrawing: () => void;
    EndVrDrawing: () => void;
}