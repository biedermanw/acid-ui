export const mockRoutesConfig = [
  {
    routes: [
      {
        path: "/mockpath1",
        component: () => <div>Mock Component 1</div>,
        title: "Mock 1",
        showInNavbar: true,
        showInFooter: true,
      },
      {
        path: "/mockpath2",
        component: () => <div>Mock Component 2</div>,
        title: "Mock 2",
        showInNavbar: true,
        showInFooter: true,
      },
    ],
  },
];
