/**
 * JSX type augmentation so React (and other JSX-based) consumers can use
 * the IMKIT custom elements with attribute autocompletion and type checking.
 *
 * We deliberately don't import from 'react' so this file remains usable in
 * projects that don't have @types/react installed. The shim props types
 * accept arbitrary HTML attributes plus our elements' known attributes,
 * which is sufficient for both React and other JSX runtimes that merge into
 * the global JSX.IntrinsicElements namespace.
 */

interface IMKitCommonAttributes {
  token?: string
  'api-base-url'?: string
  'client-key'?: string
  'room-tag'?: string
  theme?: 'light' | 'dark' | (string & {})
  // Allow any other HTML/JSX attribute (event handlers, ref, key, style, etc.)
  // without requiring @types/react to be present.
  [key: string]: unknown
}

export interface IMKitChatRoomAttributes extends IMKitCommonAttributes {
  'room-id'?: string
}

export type IMKitRoomListAttributes = IMKitCommonAttributes

export interface IMKitChatRoomInfoAttributes extends IMKitCommonAttributes {
  'room-id'?: string
}

export type IMKitModalsContainerAttributes = IMKitCommonAttributes

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'imkit-chat-room': IMKitChatRoomAttributes
      'imkit-room-list': IMKitRoomListAttributes
      'imkit-chat-room-info': IMKitChatRoomInfoAttributes
      'imkit-modals-container': IMKitModalsContainerAttributes
    }
  }
}

export {}
