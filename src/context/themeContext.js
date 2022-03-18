
import createGlobalState from 'react-create-global-state'

const [useThemeGlobal, GlobalThemeProvider] = createGlobalState("Dark");

export { useThemeGlobal, GlobalThemeProvider }
