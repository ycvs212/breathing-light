let 彩灯 = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
let r = 0
let dr = 4
basic.forever(function () {
    r += dr
    彩灯.setBrightness(20)
    彩灯.showColor(neopixel.rgb(r, 0, 0))
    彩灯.show()
    basic.pause(2)
})
