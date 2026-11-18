# Fig garden

A vintage pastel garden look for Claude. It paints the desktop and mobile apps in sage greens and cream, with a deep green version for dark mode. Behind the conversation, tomato vines hang down both sides of the window and fig tree branches grow from the bottom corners, swaying slowly. The middle stays clear so text is easy to read. Each reply sits on a tinted sage card with an outline, and the app's side panels blur the drawing behind them.

The terminal and editor extensions do not draw themes, so nothing changes there.

## Install

At the prompt of a terminal session:

```
/plugin install fig-garden --marketplace aif-drake/fig-garden
```

Answer `y` to add the marketplace, then press Enter to pick the user scope.

From a shell:

```
claude plugin install fig-garden --marketplace aif-drake/fig-garden
```

In the desktop app, where `/plugin` does not run: click + next to the prompt box, then Plugins, Add marketplace with `aif-drake/fig-garden`, then Add plugin.

## Changing it

- Colours: `hooks/palette.ts`
- The drawing: `hooks/scene.ts`
