import { ImgDimensions } from '../interfaces'

/**
 * This will allow us to downsize an image proportionately
 * @param inboundHeight
 * @param inboundWidth
 * @param setHeight The height you wish to downsize the image to, the width also gets downsized in proportion to the height. Defaults to 100
 * @returns {ImgDimensions}"{ height: setHeight, width: inboundWidth / ratio }"
 */
export const dimensionNormalizer = (
  inboundHeight: number,
  inboundWidth: number,
  setHeight: number = 100
): ImgDimensions => {
  let ratio: number = inboundHeight / setHeight
  if (inboundHeight === inboundWidth) {
    return { height: setHeight, width: setHeight }
  }
  return { height: setHeight, width: inboundWidth / ratio }
}
