const r = require("raylib");
const windowWidth = 600;
const windowHeight = 400;
const blue = {
    r: 50,
    g: 100,
    b: 220,
    a: 255,
};
const glass = {
    r: 255,
    g: 50,
    b: 50,
    a: 120,
};
const rect = {
    x: 50,
    y: 50,
    width: 200,
    height: 100,
};
const button = {
    position: {
        x: 100,
        y: 100,
    },
    size: {
        x: 200,
        y: 50,
    },
};
const panel = {
    x: 50,
    y: 50,
    width: 300,
    height: 150,
};
const target = {
    x: 200,
    y: 100,
};

r.SetTraceLogLevel(r.LOG_NONE);
r.InitWindow(windowWidth, windowHeight, "Bounce");
r.SetTargetFPS(80);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);
    // r.DrawRectangleRec(r1, blue);
    // r.DrawRectangleV(button.position, button.size, r.BLUE);
    // r.DrawRectangleLines(r1.x, r1.y, r1.width, r1.height, r.WHITE);
    // r.DrawRectangleRounded(rect, 1, 8, r.BLUE);
    // r.DrawRectangleRoundedLines(rect, 1, 8, 5, r.WHITE);
    r.DrawRectangleGradientV(
        panel.x,
        panel.y,
        panel.width,
        panel.height,
        r.ORANGE,
        r.RED,
    );
    r.DrawCircleV(target, 30, r.YELLOW);
    r.DrawCircleLines(target.x, target.y, 30, r.WHITE);
    r.DrawCircleSector(target, 40, 0, 90, 20, r.MAROON);
    r.DrawCircleSectorLines(target, 40, 0, 90, 20, r.BROWN);
    // r.DrawRectangleRoundedLinesEx(rect, 0.2, 8, 4, r.WHITE);
    // r.DrawRectangle(100, 80, 200, 100, glass);
    // r.DrawRectangle(50, 50, 200, 100, yellow);

    r.EndDrawing();
}

r.CloseWindow();
