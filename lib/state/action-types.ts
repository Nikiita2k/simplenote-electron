import * as T from '../types';

export type Action<
  T extends string,
  Args extends { [extraProps: string]: unknown } = {}
> = { type: T } & Args;

/*
 * Legacy action-creators that are more like global setters than Redux actions
 */
export type SetAccountName = Action<'setAccountName', { accountName: string }>;
export type SetAutoHideMenuBar = Action<
  'setAutoHideMenuBar',
  { autoHideMenuBar: boolean }
>;
export type SetFocusMode = Action<
  'setFocusMode',
  { focusModeEnabled: boolean }
>;
export type SetFontSize = Action<'setFontSize', { fontSize?: number }>;
export type SetLineLength = Action<
  'setLineLength',
  { lineLength: T.LineLength }
>;
export type SetNoteDisplay = Action<
  'setNoteDisplay',
  { noteDisplay: T.ListDisplayMode }
>;
export type SetSortReversed = Action<
  'setSortReversed',
  { sortReversed: boolean }
>;
export type SetSortTagsAlpha = Action<
  'setSortTagsAlpha',
  { sortTagsAlpha: boolean }
>;
export type SetSortType = Action<'setSortType', { sortType: T.SortType }>;
export type SetSpellCheck = Action<
  'setSpellCheck',
  { spellCheckEnabled: boolean }
>;
export type SetTheme = Action<'setTheme', { theme: T.Theme }>;

/*
 * Normal action types
 */
export type CloseDialog = Action<'CLOSE_DIALOG'>;
export type CloseNote = Action<'CLOSE_NOTE'>;
export type CreateNote = Action<'CREATE_NOTE'>;
export type CreateNoteWithId = Action<
  'CREATE_NOTE_WITH_ID',
  { noteId: T.EntityId }
>;
export type DeleteNoteForever = Action<'DELETE_NOTE_FOREVER'>;
export type EditNote = Action<
  'EDIT_NOTE',
  { noteId: T.EntityId; changes: Partial<T.Note> }
>;
export type FilterNotes = Action<
  'FILTER_NOTES',
  { noteIds: T.EntityId[]; tags: T.TagEntity[] }
>;
export type FocusSearchField = Action<'FOCUS_SEARCH_FIELD'>;
export type Logout = Action<'LOGOUT'>;
export type OpenNote = Action<'OPEN_NOTE', { noteId: T.EntityId }>;
export type OpenTag = Action<'OPEN_TAG', { tag: T.TagEntity }>;
export type RemoteNoteUpdate = Action<
  'REMOTE_NOTE_UPDATE',
  { noteId: T.EntityId; data: T.Note }
>;
export type RestoreNote = Action<'RESTORE_NOTE'>;
export type Search = Action<'SEARCH', { searchQuery: string }>;
export type SelectNote = Action<
  'SELECT_NOTE',
  { note: T.NoteEntity; options?: { hasRemoteUpdate: boolean } }
>;
export type SelectRevision = Action<
  'SELECT_REVISION',
  { revision: T.NoteEntity }
>;
export type SelectTrash = Action<'SELECT_TRASH'>;
export type SetAnalytics = Action<'SET_ANALYTICS', { allowAnalytics: boolean }>;
export type SetSystemTag = Action<
  'SET_SYSTEM_TAG',
  { note: T.NoteEntity; tagName: T.SystemTag; shouldHaveTag: boolean }
>;
export type SetUnsyncedNoteIds = Action<
  'SET_UNSYNCED_NOTE_IDS',
  { noteIds: T.EntityId[] }
>;
export type ShowAllNotes = Action<'SHOW_ALL_NOTES'>;
export type ShowDialog = Action<'SHOW_DIALOG', { dialog: T.DialogType }>;
export type StoreRevisions = Action<
  'STORE_REVISIONS',
  { noteId: T.EntityId; revisions: T.NoteEntity[] }
>;
export type SystemThemeUpdate = Action<
  'SYSTEM_THEME_UPDATE',
  { prefers: 'light' | 'dark' }
>;
export type TagsLoaded = Action<
  'TAGS_LOADED',
  { tags: T.TagEntity[]; sortTagsAlpha: boolean }
>;
export type ToggleAnalytics = Action<'TOGGLE_ANALYTICS'>;
export type ToggleEditMode = Action<'TOGGLE_EDIT_MODE'>;
export type ToggleKeyboardShortcuts = Action<'KEYBOARD_SHORTCUTS_TOGGLE'>;
export type ToggleNavigation = Action<'NAVIGATION_TOGGLE'>;
export type ToggleNoteList = Action<'NOTE_LIST_TOGGLE'>;
export type ToggleNoteInfo = Action<'NOTE_INFO_TOGGLE'>;
export type ToggleRevisions = Action<'REVISIONS_TOGGLE'>;
export type ToggleSimperiumConnectionStatus = Action<
  'SIMPERIUM_CONNECTION_STATUS_TOGGLE',
  { simperiumConnected: boolean }
>;
export type ToggleTagDrawer = Action<'TAG_DRAWER_TOGGLE', { show: boolean }>;
export type ToggleTagEditing = Action<'TAG_EDITING_TOGGLE'>;
export type TrashNote = Action<'TRASH_NOTE'>;
export type WindowResize = Action<'WINDOW_RESIZE', { innerWidth: number }>;

export type ActionType =
  | CloseNote
  | CloseDialog
  | CreateNote
  | CreateNoteWithId
  | DeleteNoteForever
  | EditNote
  | FilterNotes
  | FocusSearchField
  | Logout
  | RemoteNoteUpdate
  | OpenNote
  | OpenTag
  | RestoreNote
  | Search
  | SelectNote
  | SelectRevision
  | SelectTrash
  | SetAccountName
  | SetAnalytics
  | SetAutoHideMenuBar
  | SetFocusMode
  | SetFontSize
  | SetLineLength
  | SetNoteDisplay
  | SetSortReversed
  | SetSortTagsAlpha
  | SetSortType
  | SetSpellCheck
  | SetSystemTag
  | SetTheme
  | SetUnsyncedNoteIds
  | ShowAllNotes
  | ShowDialog
  | StoreRevisions
  | SystemThemeUpdate
  | TagsLoaded
  | ToggleAnalytics
  | ToggleEditMode
  | ToggleKeyboardShortcuts
  | ToggleNavigation
  | ToggleNoteList
  | ToggleNoteInfo
  | ToggleRevisions
  | ToggleSimperiumConnectionStatus
  | ToggleTagDrawer
  | ToggleTagEditing
  | TrashNote
  | WindowResize;

export type ActionCreator<A extends ActionType> = (...args: any[]) => A;
export type Reducer<S> = (state: S | undefined, action: ActionType) => S;
