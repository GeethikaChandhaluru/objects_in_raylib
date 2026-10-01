const r = require("raylib");
const windowWidth = 600;
const windowHeight = 400;

const rect = {
    x: 20,
    y: 20,
    width: 200,
    height: 100,
};
const lightred = { r: 255, g: 100, b: 100, a: 255 };
const cream = { r: 230, g: 230, b: 230, a: 255 };

r.SetTraceLogLevel(r.LOG_NONE);
r.InitWindow(windowWidth, windowHeight, "colored window");
r.SetTargetFPS(80);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);

    r.DrawRectangleRec(rect, lightred);
    r.DrawRectangleLines(rect.x, rect.y, rect.width, rect.height, cream);

    r.EndDrawing();
}

r.CloseWindow();
