const STATUS_CONFIG = {
  TODO: { text: 'Todo', value: 1 },
  IN_PROGRESS: { text: 'In Progress', value: 2 },
  TO_VERIFY: { text: 'To Verify', value: 3 },
  DONE: { text: 'Done', value: 4 }
}

const PRIORITY_CONFIG = {
  LOW: { text: 'Low', value: 1 },
  NORMAL: { text: 'Normal', value: 2 },
  URGENT: { text: 'Urgent', value: 3 },
  IMPORTANT: { text: 'Important', value: 4 }
}

const TEAM_CONFIG = {
  FRONT_END: { text: 'Front End', value: 1 },
  BACK_END: { text: 'Back End', value: 2 },
  DESIGNER: { text: 'Designer', value: 3 },
}

// key = 1 -> value = text
const HASH_TEAM_CONFIG = {};
for (let key in TEAM_CONFIG) {
  HASH_TEAM_CONFIG[TEAM_CONFIG[key].value] = TEAM_CONFIG[key].text
}

export {
  STATUS_CONFIG,
  PRIORITY_CONFIG,
  TEAM_CONFIG,
  HASH_TEAM_CONFIG
}
