#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const cdk = require("@aws-cdk/core");
const cdk_stack_1 = require("../lib/cdk-stack");
const app = new cdk.App();
new cdk_stack_1.CdkStackJavaApp(app, 'CdkStackJavaApp');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUFxQztBQUNyQyxxQ0FBcUM7QUFDckMsZ0RBQW1EO0FBRW5ELE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzFCLElBQUksMkJBQWUsQ0FBQyxHQUFHLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbmltcG9ydCB7IENka1N0YWNrSmF2YUFwcCB9IGZyb20gJy4uL2xpYi9jZGstc3RhY2snO1xuXG5jb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xubmV3IENka1N0YWNrSmF2YUFwcChhcHAsICdDZGtTdGFja0phdmFBcHAnKTtcbiJdfQ==