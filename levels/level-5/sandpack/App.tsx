// @ts-nocheck
import React from "react"

import Component from "./Component"
import * as mockModule from "./mock"
import { levelRuntime } from "./level-template-runtime"
import { PreviewRuntimeContractBoundary } from "./preview-runtime-contract";

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

const previewMock = mockModule.mock

function pickPreviewProps(): Record<string, unknown> {
  const explicit = mockModule.mockProps ?? mockModule.mock

  if (isPlainObject(explicit)) {
    return explicit
  }

  return {}
}

export default function App() {
  void levelRuntime

  const previewProps = pickPreviewProps()

  if (Object.keys(previewProps).length > 0) {
    return (
      <main className="desengine-preview-root">
        <PreviewRuntimeContractBoundary>
          <Component {...previewProps} />
        </PreviewRuntimeContractBoundary>
      </main>
    )
  }

  if (Array.isArray(previewMock)) {
    return (
      <main className="desengine-preview-root">
        <PreviewRuntimeContractBoundary>
          {previewMock.map((item, index) => (
            <Component key={index} {...item} />
          ))}
        </PreviewRuntimeContractBoundary>
      </main>
    )
  }

  return (
    <main className="desengine-preview-root">
      <PreviewRuntimeContractBoundary>
        <Component {...previewProps} />
      </PreviewRuntimeContractBoundary>
    </main>
  )
}
