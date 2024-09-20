# Gatsby Wordpress Template

Make sure to have php@8 and composer installed for this project.
Make sure to have node -v ^18

## Setup Gatsby

**1.** Create a [new github repository](https://github.com/organizations/qteab/repositories/new) and select `qteab/gatsby-wordpress-template` as template.

**2.** Clone the repository locally and branch out to dev

```bash
git clone <github-repository-url>
cd <github-repository-name>
git checkout dev
```

**3.** Install dependencies

```bash
yarn
```

**4.** Composer Install

make sure you're using php 8
```bash
php -v
brew unlink php@7.4
brew link php@8
```

Composer install
```bash
cd theme
composer install
cd ..
```

## Setup Wordpress with Gatsby

**1.** Create a [new Wordpress page](https://wp-installer.dev8.qte.nu/).
(Make sure to use dev8 for php8)

- Enter domain (lower-case letters)

- Select type Gatsby.

- Create.

- Select language: "Svenska" or "English".

- Enter wordpress information:

  - Site Title: ProjectName
  - Username: admin
  - Password: (save in 1password @gatsby)
  - Your Email: wpsites@qte.se
  - Install Wordpress
  - Login to dashboard

**2.** Activate plugins:

Activate all plugins in Wordpress.
(Exclude: Akismet Anti-Spam and Hello Dolly)


## Connect Gatsby with Wordpress using Prepros

**1.** In VS Code: Copy `.env.example` in the project root to `.env.development / .env.production` and edit your preferences.

```bash
SITE_URL=http://localhost:8000
WP_GRAPHQL_URL=https://{yourprojectdomain}.dev8.qte.nu/graphql

// For other .env-variables use "GATSBY" as prefix:
GATSBY_EXAMPLE_VARIABLY
```

**2.** Install [Prepros](https://prepros.io/downloads).

**3. Get SFTP login credentials:**

- Contact [Noah Olsson](https://qtedev.slack.com/team/U7KMM8WLA).

**4. Add new project to Prepros:**

- (On first time use: Press "browse") Press "+ Add Project" in the bottom left corner.
- Navigate to your project theme path ../ProjectName/theme
- Press Add Project.

**5. Project Settings:**

1. Have your newly added project selected and press the hamburger menu in the top right corner.
2. Press "Project Settings".
3. In General tab - Set "Project Name" to match your project.
4. In Upload tab:
   - Select SFTP
   - Host: dev8.qte.nu
   - Port: 22
   - Username: Your SFTP Username
   - Password: Your SFTP Password
   - Remote Path: ./sites/`{project-name}`/wp-content/themes/`{project-name}`
   - Check Upload Automatically
5. Close settings and navigate to the "upload" tab and press "Upload". Make sure all files get checked with a green checkmark. ✅

If you have any troubles setting up Prepros, contact [Emanuel Ström](https://qtedev.slack.com/team/U0335CN471C).

6. **In Wordpress**, activate the "QTE Gatsby Theme" in Appearence/theme.

## Create ACF components

**1. In VS Code, go to the theme/acf/blocks folder, from the project root and create a new Flexible content block:**

```bash
  cd theme/acf/blocks
  touch <block-name>.php
```

**2. Add this template to the block file:**

```php
<?php

use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\Layout;
use Extended\ACF\Fields\Text;


// replace Block Name with the name of the block
return Layout::make('Block Name', 'block-name')
  ->layout('block')
  ->fields([
    // replace Block Name with the name of the block
    graphql_label('Block Name'),
    // Example fields:
    Image::make('Background Image', 'background-image'),
    Text::make('Title', 'title'),
  ]);

```

**3. Create Gatsby component**

```shell
cd src/components/layout-blocks

mkdir <BlockName>

cd <BlockName>

touch index.tsx
touch <BlockName>.data.ts
touch <BlockName>.styled.ts
```

**4. Add content to `<BlockName>`.data.ts**

```TypeScript

// example fields
module.exports = () => `
  title
  image {
    altText
    sourceUrl
  }
`;
```

**5. Add content to `<BlockName>`.styled.ts**

```TypeScript
import styled from "styled-components";

const Container = styled.div``;

const S = {
  Container,
};

export default S;
```

**6. Add content to index.tsx**

```TypeScript
import * as React from "react";
import { IWPImage } from "@/src/types"; //interface for image
import S from "./`<BlockName>`.styled";

export interface Props {
  title: string;
  image : IWPImage;
}

const `<BlockName>`: React.FC<Props> = ({title, image}) => {
  return <S.Container>{title && title}</S.Container>
  };

export default `<BlockName>`;
```

**7. Add `<BlockName>` component to src/components/core-blocks/Flexible/index.tsx**

```TypeScript
import * as React from "react";

// 1. Import the block and interface
import * as MainHero from "@/components/layout-blocks/MainHero";
import * as `<BlockName>` from "@/components/layout-blocks/`<BlockName>`"

// 2. Add enum BlockType
export enum BlockType {
  MainHero,
  `<BlockName>`
}

// 3. Add layout-block interface
export interface IComponent extends MainHero.Props, `<BlockName>`.Props {
  label: keyof typeof BlockType;
}

export interface IComponent extends MainHero.Props {
  label: keyof typeof BlockType;
}
export interface IFlexible {
  components: ReadonlyArray<IComponent>;
}

// 4. add layout-block as [BlockType.Example]: Example,
const BlockComponents = {
  [BlockType.MainHero]: MainHero.default,
};

const Flexible: React.FC<IFlexible> = ({ components }) => {
  return (
    <React.Fragment>
      {components
        ?.filter((c) => c)
        .filter((c) => c.label)
        .filter((c) => BlockType[c.label] !== undefined)
        .map((comp, index) => {
          const Component = BlockComponents[BlockType[comp.label]];

          return <Component key={index} {...comp} />;
        })}
    </React.Fragment>
  );
};

export default Flexible;
```

## Run dev environment

```shell
yarn develop
```

###### Gatsby site

[localhost](http://localhost:8000) in your browser

###### GraphQL data

[graphql](http://localhost:8000/___graphql) in your browser
