# Deep Press Mod for Lovelace
This is not really a card, it adds deep press functionality to already existing cards in [Home Assistant](https://github.com/home-assistant/home-assistant) Lovelace UI.
It can be used to mimic an iOS interface.

![deep-press](https://user-images.githubusercontent.com/26493864/61529951-f951ac00-aa22-11e9-8203-230ec5364a7c.GIF)

## Install

### HACS

1. Add `https://github.com/roflcoopter/deep-press` as a custom repository.

2. Add a reference to `deep-press.js` inside your `ui-lovelace.yaml` or through the raw config editor interface.

    ```yaml
    resources:
      - url: /community_plugin/deep-press/deep-press.js
        type: module
    ```

### Simple install

1. Download and copy `deep-press.js` from the [latest release](https://github.com/roflcoopter/deep-press/releases/latest) into your `config/www` directory.

2. Add a reference to `deep-press.js` inside your `ui-lovelace.yaml` or through the raw config editor interface.

    ```yaml
    resources:
      - url: /local/deep-press.js
        type: module
    ```

### CLI install

1. Move into your `config/www` directory

2. Download `deep-press.js`

    ```console
    $ wget https://github.com/roflcoopter/deep-press/releases/download/v0.1.0/deep-press.js
    ```

3. Add a reference to `deep-press.js` inside your `ui-lovelace.yaml` or through the raw config editor interface.

    ```yaml
    resources:
      - url: /local/deep-press.js
        type: module
    ```

## Usage
This is not actually a new card. It works by changing how other cards work. </br>
It looks for any card which has `deep_press: true` in it's config. If `hold_action` is in the target cards config, those options are used for the deep press(3D touch).</br>
When you start to press on a 3D touch enabled device it will start to blur out the view.</br>
Once you pressed deep enough the cards `hold_action` will trigger.

### Example usage
The config used for the demonstration above:
```yaml
- type: entity-button
  entity: light.kokslampa
  name: Entity Button
  deep_press: true
- type: custom:button-card
  entity: light.vitrinskap
  name: Custom button card
  deep_press: true
  hold_action:
    action: more-info
```

### Configuration options
You can add global options to ```deep_press``` at the root of your lovelace config.

| Name | Type | Requirement | Description | Default
| ---- | ---- | ------- | ----------- | -------
| enable_unsupported | boolean | **Optional** | Enable on unsupported devices | false

### Example Configuration
```yaml
resources:
  - url: /local/deep-press.js
    type: module

deep_press:
  enable_unsupported: true

views:
  ...
```
## Unsupported devices
```deep_press``` will fall back to use hold time just as a regular tap-action on devices </br>
that does not support force-touch.</br>
*Note: Some devices dont work well with the fall-back method. This is a problem with the underlying library unfortunately.*


## Notes
This is based a lot on [card-mod](https://github.com/thomasloven/lovelace-card-mod) and it uses the same technique to alter existing cards.</br>
The library used to enable deep pressing is [Pressure.js](https://github.com/stuyam/pressure).</br>
[custom-card-helpers](https://github.com/custom-cards/custom-card-helpers) is used to handle clicks. </br>
README is based on the layout from [simple-weather-card](https://github.com/kalkih/simple-weather-card).

## License
This project is under the MIT license.
