// Lottery Spin Configuration Constants

export const LOTTERY_CONFIG = {
  SLOT_COUNT: 6,
  SPIN_DURATION: 3000, // milliseconds
  STAGGER_DELAY: 100, // milliseconds between each slot start
  WIN_MESSAGE_DELAY: 500, // milliseconds after spin completes
  FINAL_NUMBERS: [1, 2, 3, 4, 5, 6] as const,
} as const;

export const NUMBER_PANEL_CONFIG = {
  HEIGHT: 80, // pixels
  NUMBERS_TO_RENDER: 30, // number of number elements to render for smooth scrolling
  SCROLL_SPEED: 15, // pixels per frame
} as const;

