const r = require("raylib");
const windowWidth = 600;
const windowHeight = 400;

const point = {
    x: windowWidth / 2,
    y: windowHeight / 2,
};

const lightred = { r: 255, g: 100, b: 100, a: 150 };
const maroon = { r: 128, g: 0, b: 0, a: 150 };
const cream = { r: 230, g: 230, b: 230, a: 150 };

r.SetTraceLogLevel(r.LOG_NONE);
r.InitWindow(windowWidth, windowHeight, "A simple target");
r.SetTargetFPS(80);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);

    r.DrawCircleV(point, 100, r.BROWN);
    r.DrawCircleV(point, 80, maroon);
    r.DrawCircleV(point, 60, cream);
    r.DrawCircleV(point, 40, r.BLUE);
    r.DrawCircleV(point, 20, lightred);

    r.EndDrawing();
}

r.CloseWindow();
