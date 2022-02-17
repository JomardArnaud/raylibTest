import { Color } from "./types/colors";
import { Vector2, Rectangle } from "./types/maths";
import { Texture2D } from "./types/texture";
export default interface Shapes {
    DrawPixel: (posX: number, posY: number, color: Color) => void;
    DrawPixelV: (position: Vector2, color: Color) => void;
    DrawLine: (startPosX: number, startPosY: number, endPosX: number, endPosY: number, color: Color) => void;
    DrawLineV: (startPos: Vector2, endPos: Vector2, color: Color) => void;
    DrawLineEx: (startPos: Vector2, endPos: Vector2, thick: number, color: Color) => void;
    DrawLineBezier: (startPos: Vector2, endPos: Vector2, thick: number, color: Color) => void;
    DrawLineStrip: (points: Vector2, numPoints: number, color: Color) => void;
    DrawCircle: (centerX: number, centerY: number, radius: number, color: Color) => void;
    DrawCircleSector: (center: Vector2, radius: number, startAngle: number, endAngle: number, segments: number, color: Color) => void;
    DrawCircleSectorLines: (center: Vector2, radius: number, startAngle: number, endAngle: number, segments: number, color: Color) => void;
    DrawCircleGradient: (centerX: number, centerY: number, radius: number, color1: Color, color2: Color) => void;
    DrawCircleV: (center: Vector2, radius: number, color: Color) => void;
    DrawCircleLines: (centerX: number, centerY: number, radius: number, color: Color) => void;
    DrawRing: (center: Vector2, innerRadius: number, outerRadius: number, startAngle: number, endAngle: number, segments: number, color: Color) => void;
    DrawRingLines: (center: Vector2, innerRadius: number, outerRadius: number, startAngle: number, endAngle: number, segments: number, color: Color) => void;
    DrawRectangle: (posX: number, posY: number, width: number, height: number, color: Color) => void;
    DrawRectangleV: (position: Vector2, size: Vector2, color: Color) => void;
    DrawRectangleRec: (rec: Rectangle, color: Color) => void;
    DrawRectanglePro: (rec: Rectangle, origin: Vector2, rotation: number, color: Color) => void;
    DrawRectangleGradientV: (posX: number, posY: number, width: number, height: number, color1: Color, color2: Color) => void;
    DrawRectangleGradientH: (posX: number, posY: number, width: number, height: number, color1: Color, color2: Color) => void;
    DrawRectangleGradientEx: (rec: Rectangle, col1: Color, col2: Color, col3: Color, col4: Color) => void;
    DrawRectangleLines: (posX: number, posY: number, width: number, height: number, color: Color) => void;
    DrawRectangleLinesEx: (rec: Rectangle, lineThick: number, color: Color) => void;
    DrawRectangleRounded: (rec: Rectangle, roundness: number, segments: number, color: Color) => void;
    DrawRectangleRoundedLines: (rec: Rectangle, roundness: number, segments: number, lineThick: number, color: Color) => void;
    DrawTriangle: (v1: Vector2, v2: Vector2, v3: Vector2, color: Color) => void;
    DrawTriangleLines: (v1: Vector2, v2: Vector2, v3: Vector2, color: Color) => void;
    DrawTriangleFan: (points: Vector2, numPoints: number, color: Color) => void;
    DrawPoly: (center: Vector2, sides: number, radius: number, rotation: number, color: Color) => void;
    SetShapesTexture: (texture: Texture2D, source: Rectangle) => void;
    CheckCollisionRecs: (rec1: Rectangle, rec2: Rectangle) => boolean;
    CheckCollisionCircles: (center1: Vector2, radius1: number, center2: Vector2, radius2: number) => boolean;
    CheckCollisionCircleRec: (center: Vector2, radius: number, rec: Rectangle) => boolean;
    GetCollisionRec: (rec1: Rectangle, rec2: Rectangle) => Rectangle;
    CheckCollisionPointRec: (point: Vector2, rec: Rectangle) => boolean;
    CheckCollisionPointCircle: (point: Vector2, center: Vector2, radius: number) => boolean;
    CheckCollisionPointTriangle: (point: Vector2, p1: Vector2, p2: Vector2, p3: Vector2) => boolean;
}