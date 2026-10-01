const r = require("raylib");
const windowWidth = 600;
const windowHeight = 400;
const spaceship = {
    position: {
        x: 100,
        y: 120,
    },

    size: {
        x: 60,
        y: 30,
    },

    color: r.WHITE,
};

r.SetTraceLogLevel(r.LOG_NONE);
r.InitWindow(windowWidth, windowHeight, "Bounce");
r.SetTargetFPS(80);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);
    r.DrawRectangleV(spaceship.position, spaceship.size, spaceship.color);
    r.DrawRectangleRounded(
        {
            x: spaceship.position.x,
            y: spaceship.position.y,
            width: spaceship.size.x,
            height: spaceship.size.y,
        },
        0.3,
        8,
        spaceship.color,
    );

    r.EndDrawing();
}

r.CloseWindow();
