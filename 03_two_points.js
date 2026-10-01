const r = require("raylib");
const windowWidth = 600;
const windowHeight = 400;

const leftPoint = {
    x: 50,
    y: 100,
};

const rightPoint = {
    x: 250,
    y: 100,
};

const lightred = { r: 255, g: 100, b: 100, a: 255 };
const maroon = { r: 128, g: 0, b: 0, a: 255 };
const cream = { r: 230, g: 230, b: 230, a: 255 };

r.SetTraceLogLevel(r.LOG_NONE);
r.InitWindow(windowWidth, windowHeight, "Rounded Button");
r.SetTargetFPS(80);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);

    r.DrawCircleV(leftPoint, 50, lightred);
    r.DrawCircleV(rightPoint, 50, maroon);
    r.DrawLineV(leftPoint, rightPoint, cream);

    r.EndDrawing();
}

r.CloseWindow();
