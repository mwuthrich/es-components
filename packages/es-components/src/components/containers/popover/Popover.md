Popover utilizes a [render prop](https://reactjs.org/docs/render-props.html) to display the popover trigger, which is typically a button component.
This function will require `ref`, `toggleShow`, and `isOpen` parameters to function properly.

```
const styles = {
    display: 'inline-block',
    margin: '10px'
};

<>
    <div style={styles}>
    <Popover
      name="topEx"
      title="Top"
      content="This is the popover's content. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch."
      placement="top"
      renderTrigger={({ ref, toggleShow, isOpen }) => (
        <Button
          onClick={toggleShow}
          aria-expanded={isOpen}
          ref={ref}
          styleType="primary"
        >
          Popover on Top
        </Button>
      )}
    />
    </div>

    <div style={styles}>
    <Popover
        name="bottomEx"
        title="Bottom"
        content="This is the popover's content. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch."
        renderTrigger={({ ref, toggleShow, isOpen }) => (
          <Button
            onClick={toggleShow}
            aria-expanded={isOpen}
            ref={ref}
            styleType="primary"
          >
            Popover on Bottom
          </Button>
        )}
      />
    </div>

    <div style={styles}>
    <Popover
        name="leftEx"
        title="Left"
        content="This is the popover's content. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch."
        placement="left"
        renderTrigger={({ ref, toggleShow, isOpen }) => (
          <Button
            onClick={toggleShow}
            aria-expanded={isOpen}
            ref={ref}
            styleType="primary"
          >
            Popover on Left
          </Button>
        )}
      />
    </div>

    <div style={styles}>
    <Popover
        name="rightEx"
        title="Right"
        content="This is the popover's content. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch."
        placement="right"
        renderTrigger={({ ref, toggleShow, isOpen }) => (
          <Button
            onClick={toggleShow}
            aria-expanded={isOpen}
            ref={ref}
            styleType="primary"
          >
            Popover on Right
          </Button>
        )}
      />
    </div>

</>
```

```
<>
Here's an example of a
<Popover
    name="popEx"
    content="This is the popover's content. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch."
    renderTrigger={({ ref, toggleShow, isOpen }) => (
      <PopoverLink
        onClick={toggleShow}
        aria-expanded={isOpen}
        ref={ref}
        styleType="primary"
      >
        Popover
      </PopoverLink>
    )}
  />
styled like a link.
</>
```

Popovers can include Icons or other components. Keep accessibility in mind and provide aria labels where appropriate.

```
<>
Click the icon for some help text.
<Popover
    name="iconEx"
    title="Icon Popover"
    disableRootClose
    hasAltCloseButton
    content="Here's some help text!"
    suppressUnderline
    ariaLabel="Icon"
    renderTrigger={({ ref, toggleShow, isOpen }) => (
      <PopoverLink
        onClick={toggleShow}
        aria-expanded={isOpen}
        ref={ref}
        suppressUnderline
        styleType="primary"
      >
        <span aria-hidden="true"><Icon name='question-circle' size={22} /></span>
        <span style={{ fontSize: '0', height: '1px', display: 'block', overflow: 'hidden' }}>Icon</span>
      </PopoverLink>
    )}
/>
</>
```

```
const styles = {
    display: 'inline-block',
    margin: '0 10px'
};

<div>
    <div style={styles}>
    <Popover
        name="smEx"
        title="Small Arrow"
        content="This is the popover's content."
        placement="top"
        arrowSize="sm"
        renderTrigger={({ ref, toggleShow, isOpen }) => (
          <OutlineButton
            onClick={toggleShow}
            aria-expanded={isOpen}
            ref={ref}
            styleType="primary"
          >
            Small Arrow
          </OutlineButton>
        )}
    />
    </div>

    <div style={styles}>
    <Popover
        name="dfltEx"
        title="Default Arrow"
        content="This is the popover's content."
        renderTrigger={({ ref, toggleShow, isOpen }) => (
          <OutlineButton
            onClick={toggleShow}
            aria-expanded={isOpen}
            ref={ref}
            styleType="primary"
          >
            Default Arrow
          </OutlineButton>
        )}
    />
    </div>

    <div style={styles}>
    <Popover
        name="lgEx"
        title="Large Arrow"
        content="This is the popover's content."
        placement="top"
        arrowSize="lg"
        renderTrigger={({ ref, toggleShow, isOpen }) => (
          <OutlineButton
            onClick={toggleShow}
            aria-expanded={isOpen}
            ref={ref}
            styleType="primary"
          >
            Large Arrow
          </OutlineButton>
        )}
    />
    </div>

    <div style={styles}>
    <Popover
        name="noneEx"
        title="No Arrow"
        content="This is the popover's content."
        placement="bottom"
        arrowSize="none"
        renderTrigger={({ ref, toggleShow, isOpen }) => (
          <OutlineButton
            onClick={toggleShow}
            aria-expanded={isOpen}
            ref={ref}
            styleType="primary"
          >
            No Arrow
          </OutlineButton>
        )}
    />
    </div>
</div>
```
