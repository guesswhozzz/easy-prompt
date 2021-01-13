export interface ISFlag {
  flag: boolean
  status?: boolean
}

export interface IEColor {
  colorId: number | 'RST'
  colorInfo?: boolean
  hexString: string
  rgb: object
  hsl: object
  name: string
}

export interface IPromptElem {
  id: number | null
  options: null
  text: string
  sequences: string
  code: string
  style: Array<{ style: string, code: string } | undefined>
  bg: IEColor
  fg: IEColor
  type: string
}

export interface IPromptLineModel {
  psonemodel: IPromptElem[][]
}