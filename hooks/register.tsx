import type { Register, ThemeSetArgs } from 'claude-code'

import { problems, theme } from './palette'
import { SCENE } from './scene'

// The panels over the drawing are fully clear, with no blur. The default glass frosts
// them (a lighter band around the prompt bar) and glass: false leaves them solid
// (a block that hides the drawing behind the prompt bar).
const LOOK: ThemeSetArgs = { colors: theme, backdrop: { scene: 'garland', glass: { blur: 0, opacity: 0 } } }

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))

    if (unpainted !== undefined) {
      $.ui.toast(unpainted)
    }
    const set = await $.theme.set(LOOK)

    if (!set.isDrawn) {
      $.ui.status(set.reason)
    }

    return next(e)
  })

  on('ui.render', { component: 'Backdrop' }, ($, e, next) => {
    if (e.props.scene !== 'garland' || (e.surface !== 'desktop' && e.surface !== 'mobile')) {
      return next(e)
    }
    const { Svg } = $.ui.resolve(e)

    return <Svg source={SCENE} alt="Tomato vines down both sides and fig branches in the bottom corners" isInteractive />
  })
}
