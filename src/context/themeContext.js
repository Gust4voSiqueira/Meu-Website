
import createGlobalState from 'react-create-global-state'

const [useThemeGlobal, GlobalThemeProvider] = createGlobalState("Light");

export { useThemeGlobal, GlobalThemeProvider }