const r = require("raylib");
const windowWidth = 600;
const windowHeight = 400;

const radius = 100;

const point = {
    x: windowWidth / 2,
    y: windowHeight / 2,
};
const wheel1 = {
    x: windowWidth / 2 - radius / 2,
    y: windowHeight / 2,
};
const wheel2 = {
    x: windowWidth / 2 + radius / 2,
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

    r.ClearBackground(r.BLUE);

    r.DrawCircleSector(point, radius, 90, 270, 3, lightred);
    r.DrawCircleSectorLines(point, radius, 90, 270, 3, r.BLACK);
    r.DrawCircleV(wheel1, 17, r.BROWN);
    r.DrawCircleLines(wheel1.x, wheel1.y, 17, r.BLACK);
    r.DrawCircleV(wheel2, 17, r.BROWN);
    r.DrawCircleLines(wheel2.x, wheel2.y, 17, r.BLACK);

    r.EndDrawing();
}

r.CloseWindow();
