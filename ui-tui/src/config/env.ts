const truthy = (v?: string) => /^(?:1|true|yes|on)$/i.test((v ?? '').trim())

export const STARTUP_RESUME_ID = (process.env.HERMES_TUI_RESUME ?? '').trim()
export const MOUSE_TRACKING = !truthy(process.env.HERMES_TUI_DISABLE_MOUSE)
// Drag-release auto-copies the selected text. Off by default for terminals
// that do clipboard their own way; opt out with the env var or /copyselect.
export const COPY_ON_SELECT = !truthy(process.env.HERMES_TUI_DISABLE_COPY_ON_SELECT)
export const NO_CONFIRM_DESTRUCTIVE = truthy(process.env.HERMES_TUI_NO_CONFIRM)

// Skip AlternateScreen — TUI renders into the primary buffer so the host
// terminal's native scrollback captures whatever scrolls off the top.
// Experiment gate: lets us measure native scroll vs our virtualization on
// the same pipeline.
export const INLINE_MODE = truthy(process.env.HERMES_TUI_INLINE)

// Live FPS counter overlay, fed by ink's onFrame (real render rate, not a
// synthetic timer).
export const SHOW_FPS = truthy(process.env.HERMES_TUI_FPS)
