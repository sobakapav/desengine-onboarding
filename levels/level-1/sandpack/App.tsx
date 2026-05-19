// @ts-nocheck
import React from "react"

import Component from "./Component"
import * as mockModule from "./mock"
import { levelRuntime } from "./level-template-runtime"

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

function pickPreviewProps(): Record<string, unknown> {
  const explicit = (mockModule as { mockProps?: unknown; mock?: unknown }).mockProps ?? (mockModule as { mock?: unknown }).mock

  if (isPlainObject(explicit)) {
    return explicit
  }

  return {}
}

export default function App() {
  void levelRuntime

  return (
    <main className="desengine-preview-root">
      <Component {...pickPreviewProps()} />
    </main>
  )
}
