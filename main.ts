function FeuR () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(tR)
    strip.clear()
}
function FeuV () {
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    basic.pause(tV)
    strip.clear()
}
function FeuO () {
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
    strip.show()
    basic.pause(tO)
    strip.clear()
}
let tO = 0
let tR = 0
let tV = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 3, NeoPixelMode.RGB)
strip.setBrightness(25)
tV = 10000
tR = 10000
tO = 2000
basic.forever(function () {
    FeuR()
    FeuO()
    FeuV()
})
