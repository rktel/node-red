import Home from './pages/home.svelte';
import PanelLeft from './pages/panel-left.svelte';
import PanelRight from './pages/panel-right.svelte';
import About from './pages/about.svelte';
// Pages
export default [
    // Index page
    {
      path: '/',
      component: Home,
      master(f7) {
        return f7.theme === 'aurora';
      },
    },
    // About page
    {
      path: '/about/',
      component: About,
    },
    // Left Panel
    {
      path: '/panel-left/',
      component: PanelLeft,
    },
    // Right Panel
    {
      path: '/panel-right/',
      component: PanelRight,
    }]