import { Button } from "./components/button/button";

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <p>types</p>
        <div style={{display: 'flex', gap: '20px'}}>
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </div>
        <p>sizes</p>
        <div style={{display: 'flex', gap: '20px'}}>
          <Button size="sm" type="primary">Primary Button</Button>
          <Button size="md" type="primary">Primary Button</Button>
          <Button size="lg" type="primary">Primary Button</Button>
        </div>
        <p>full</p>
        <div style={{width: '300px'}}>
            <Button size="lg" full type="primary">Primary Button</Button>
        </div>
      </body>
    </>
  );
};
