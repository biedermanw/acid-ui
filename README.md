# How To Write

Modern web development emphasizes modularity and maintainability. The structured approach detailed in the following sections promotes this by treating each component and page as independent entities with their own logic and style. By using tools like Storybook, components can be visualized and tested in isolation, ensuring robustness. Separating styles into individual files streamlines interface refinement and fosters collaboration between developers and designers. In short, this development cycle is designed to enhance efficiency, code quality, and the overall user experience.

## Creating a New Component:

1. **Create the Component Directory**:

   - Navigate to the `components` directory.
   - Create a new directory with the name of the component, say `NewComponent`.

2. **Create the Component File**:
   - Inside the `NewComponent` directory, create a file named `NewComponent.tsx`.
   - Use the following template as a guide:

```tsx
import React from 'react';
// Import styles or any other dependencies as needed.

type NewComponentProps = {
  // Define any props the component might receive.
};

const NewComponent: React.FC<NewComponentProps> = (props) => {
  return (
    // Return your component JSX here.
  );
};

export default NewComponent;
```

3. **Create the Component Styles**:
   - Inside the same directory, create a file named `NewComponent.styles.tsx`.
   - Use this structure for the styles:

```tsx
import styled from "styled-components";

export const StyledNewComponent = styled.div`
  /* Add your component styles here */
`;
```

4. **Create the Component Story**:
   - Still in the `NewComponent` directory, create a file named `NewComponent.stories.tsx`.
   - Follow this structure for the story:

```tsx
import { StoryFn, Meta } from "@storybook/react";
import NewComponent, { NewComponentProps } from "./NewComponent";

export default {
  title: "Components/NewComponent",
  component: NewComponent,
} as Meta;

const Template: StoryFn<NewComponentProps> = (args) => (
  <NewComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // Set default args here.
};
```

## Creating a New Page:

1. **Create the Page Directory**:

   - Navigate to the `pages` directory.
   - Create a new directory with the name of the page, say `NewPage`.

2. **Create the Page File**:
   - Inside the `NewPage` directory, create a file named `NewPage.tsx`.
   - Use the following template as a guide:

```tsx
import Layout from "../../components/Layout/Layout";
// Import any other dependencies or components required.

const NewPage: React.FC = () => {
  return <Layout>// Add the content of the page here.</Layout>;
};

export default NewPage;
```

3. **Create the Page Styles**:
   - Inside the `NewPage` directory, create a file named `NewPage.styles.tsx`.
   - Use this structure for the styles:

```tsx
import styled from "styled-components";

export const StyledNewPage = styled.main`
  /* Add your page-specific styles here */
`;
```

4. **Create the Page Story**:
   - Still in the `NewPage` directory, create a file named `NewPage.stories.tsx`.
   - Follow this structure for the story:

```tsx
import NewPage from "./NewPage";

export default {
  title: "Pages/NewPage",
  component: NewPage,
};

const Template = () => <NewPage />;

export const Default = Template.bind({});
```
