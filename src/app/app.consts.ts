export class KeyValues {
  // key values
  public static readonly Backspace: number = 8;
  public static readonly Tab: number = 9;
  public static readonly Enter: number = 13;
  public static readonly Escape: number = 27;
  public static readonly Home: number = 35;
  public static readonly End: number = 36;
  public static readonly Left: number = 37;
  public static readonly Up: number = 38;
  public static readonly Right: number = 39;
  public static readonly Down: number = 40;

  public static readonly Delete: number = 46;

  public static readonly Zero: number = 48;
  public static readonly One: number = 49;
  public static readonly Two: number = 50;
  public static readonly Three: number = 51;
  public static readonly Four: number = 52;
  public static readonly Five: number = 53;
  public static readonly Six: number = 54;
  public static readonly Seven: number = 55;
  public static readonly Eight: number = 56;
  public static readonly Nine: number = 57;

  public static readonly NumPad1: number = 97;
  public static readonly NumPad2: number = 98;
  public static readonly NumPad0: number = 96;
  public static readonly NumPad3: number = 99;
  public static readonly NumPad4: number = 100;
  public static readonly NumPad5: number = 101;
  public static readonly NumPad6: number = 102;
  public static readonly NumPad7: number = 103;
  public static readonly NumPad8: number = 104;
  public static readonly NumPad9: number = 105;

  public static readonly A: number = 65;
  public static readonly B: number = 66;
  public static readonly C: number = 67;
  public static readonly D: number = 68;
  public static readonly E: number = 69;
  public static readonly F: number = 70;
  public static readonly G: number = 71;
  public static readonly H: number = 72;
  public static readonly I: number = 73;
  public static readonly J: number = 74;
  public static readonly K: number = 75;
  public static readonly L: number = 76;
  public static readonly M: number = 77;
  public static readonly N: number = 78;
  public static readonly O: number = 79;
  public static readonly P: number = 80;
  public static readonly Q: number = 81;
  public static readonly R: number = 82;
  public static readonly S: number = 83;
  public static readonly T: number = 84;
  public static readonly U: number = 85;
  public static readonly V: number = 86;
  public static readonly W: number = 87;
  public static readonly X: number = 88;
  public static readonly Y: number = 89;
  public static readonly Z: number = 90;

  public static readonly Dash: number = 109;
  public static readonly Minus: number = 189;

  // Key arrays
  public static readonly navigationKeys = [
    KeyValues.Home,
    KeyValues.End,
    KeyValues.Left,
    KeyValues.Up,
    KeyValues.Right,
    KeyValues.Down
  ];

  public static readonly cutPasteKeys = [
    KeyValues.A,
    KeyValues.C,
    KeyValues.V,
    KeyValues.X
  ];

  public static readonly Numbers = [
    KeyValues.One,
    KeyValues.Two,
    KeyValues.Three,
    KeyValues.Four,
    KeyValues.Five,
    KeyValues.Six,
    KeyValues.Seven,
    KeyValues.Eight,
    KeyValues.Nine,
    KeyValues.Zero,

    KeyValues.NumPad0,
    KeyValues.NumPad1,
    KeyValues.NumPad2,
    KeyValues.NumPad3,
    KeyValues.NumPad4,
    KeyValues.NumPad5,
    KeyValues.NumPad6,
    KeyValues.NumPad7,
    KeyValues.NumPad8,
    KeyValues.NumPad9
  ];

  public static readonly Letters = [
    KeyValues.A,
    KeyValues.B,
    KeyValues.C,
    KeyValues.D,
    KeyValues.E,
    KeyValues.F,
    KeyValues.G,
    KeyValues.H,
    KeyValues.I,
    KeyValues.J,
    KeyValues.K,
    KeyValues.L,
    KeyValues.M,
    KeyValues.N,
    KeyValues.O,
    KeyValues.P,
    KeyValues.Q,
    KeyValues.R,
    KeyValues.S,
    KeyValues.T,
    KeyValues.U,
    KeyValues.V,
    KeyValues.W,
    KeyValues.X,
    KeyValues.Y,
    KeyValues.Z
  ];

  public static readonly OkForInputControl = [
    KeyValues.Delete,
    KeyValues.Backspace,
    KeyValues.Tab,
    KeyValues.Escape,
    KeyValues.Enter
  ];

  public static readonly OkForPhoneInputControl = KeyValues.OkForInputControl.concat(
    KeyValues.Minus
  );
}
