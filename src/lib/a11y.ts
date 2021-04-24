export interface AriaCommon {
	'role'?: string;
	'aria-label'?: string;
	'aria-labelledby'?: string;
}

export enum AriaRoles {
	ALERT = 'alert',
	APPLICATION = 'application',
	ARTICLE = 'article',
	BUTTON = 'button',
	BANNER = 'banner',
	CELL = 'cell',
	CHECKBOX = 'checkbox',
	COMMENT = 'comment',
	COMPLIMENTARY = 'complementary',
	CONTENT_INFO = 'contentinfo',
	DIALOG = 'dialog',
	DOCUMENT = 'document',
	FEED = 'feed',
	FIGURE = 'figure',
	FORM = 'form',
	GRID = 'grid',
	GRIDCELL = 'gridcell',
	HEADING = 'heading',
	IMG = 'img',
	LIST = 'list',
	LIST_ITEM = 'listitem',
	MAIN = 'main',
	NAVIGATION = 'navigation',
	REGION = 'region',
	ROW = 'row',
	ROW_GROUP = 'rowgroup',
	SEARCH = 'search',
	SWITCH = 'switch',
	TAB = 'tab',
	TABLE = 'table',
	TEXTBOX = 'textbox',
	TIMER = 'timer',
	COMPLI = 'complementary'
}