
export const LOTTERY_CONFIG = {
  SLOT_COUNT: 6,
  SPIN_DURATION: 3000, 
  STAGGER_DELAY: 100, 
  WIN_MESSAGE_DELAY: 500, 
  FINAL_NUMBERS: [1, 2, 3, 4, 5, 6] as const,
} as const;

export const NUMBER_PANEL_CONFIG = {
  HEIGHT: 80, 
  NUMBERS_TO_RENDER: 30, 
  SCROLL_SPEED: 15, 
} as const;

