## REVIEW

- JavaScript engines register events as objects with properties and methods associated with them.
- Event handlers are registered as properties of their event object.
Event object properties like `.target`, `.type`, and `.timeStamp` are used to provide information about the event.
The `.addEventListener()` method can be used to add multiple event handler functions to a single event.
The `.removeEventListener()` method stops specific event handlers from “listening” for specific events firing.