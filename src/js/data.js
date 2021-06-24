var sourceData = [
  {
    icon_name: "Create",
    icon_path: "create",
    icon_keywords: "create new make note write",
  },
  {
    icon_name: "Write",
    icon_path: "write",
    icon_keywords: "write writing new create note taking paper pencil",
  },
  {
    icon_name: "Pen",
    icon_path: "pen",
    icon_keywords: "write writing new create note taking paper pencil",
  },
  {
    icon_name: "Tag",
    icon_path: "tag",
    icon_keywords: "tag keyword topic",
  },
  {
    icon_name: "Tags",
    icon_path: "tags",
    icon_keywords: "tags keyword topic",
  },
  {
    icon_name: "Speech Bubble",
    icon_path: "speech_bubble",
    icon_keywords: "speech bubble chat",
  },
  {
    icon_name: "Speech Bubble (Writing)",
    icon_path: "speech_typing",
    icon_keywords: "speech bubble chat speak speech typing writing waiting",
  },
  {
    icon_name: "Speech Bubble (Add)",
    icon_path: "chat_add",
    icon_keywords: "chat bubble speech speak message new add",
  },
  {
    icon_name: "Paperclip",
    icon_path: "paperclip",
    icon_keywords: "paperclip attachment link",
  },
  {
    icon_name: "Phone (Portrait)",
    icon_path: "phone_portrait",
    icon_keywords: "iphone android phone portrait mobile talk",
  },
  {
    icon_name: "Phone (Landscape)",
    icon_path: "phone_landscape",
    icon_keywords: "iphone android phone landscape mobile talk",
  },
  {
    icon_name: "Phone (Alt - Portrait)",
    icon_path: "iphone_portrait",
    icon_keywords: "iphone android phone portrait mobile talk",
  },
  {
    icon_name: "Phone (Alt - Landscape)",
    icon_path: "iphone_landscape",
    icon_keywords: "iphone android phone landscape mobile talk",
  },
  {
    icon_name: "Calendar",
    icon_path: "calendar",
    icon_keywords: "calendar",
  },
  {
    icon_name: "Calendar (Day)",
    icon_path: "calendar_day",
    icon_keywords: "calendar day",
  },
  {
    icon_name: "Calendar (Days)",
    icon_path: "calendar_days",
    icon_keywords: "calendar days",
  },
  {
    icon_name: "Calendar (Date)",
    icon_path: "calendar_date",
    icon_keywords: "calendar date",
  },
  {
    icon_name: "Calendar (End)",
    icon_path: "calendar_last_day",
    icon_keywords: "calendar day month end last final year",
  },
  {
    icon_name: "Calendar (Week)",
    icon_path: "calendar_week",
    icon_keywords: "calendar week days",
  },
  {
    icon_name: "Calendar (Month)",
    icon_path: "calendar_month",
    icon_keywords: "calendar month week",
  },
  {
    icon_name: "Calendar (Split)",
    icon_path: "calendar_split",
    icon_keywords: "calendar split",
  },
  {
    icon_name: "Calendar (Add)",
    icon_path: "calendar_add",
    icon_keywords: "calendar add",
  },
  {
    icon_name: "Calendar (Remove)",
    icon_path: "calendar_remove",
    icon_keywords: "calendar remove delete cancel",
  },
  {
    icon_name: "Calendar (Move)",
    icon_path: "calendar_move",
    icon_keywords: "calendar move",
  },
  {
    icon_name: "Check (Circle)",
    icon_path: "check_circle",
    icon_keywords: "check circle tick approved correct yes",
  },
  {
    icon_name: "Check Breakthrough (Circle)",
    icon_path: "check_circle_outside",
    icon_keywords: "check circle tick approved correct yes",
  },
  {
    icon_name: "Cross (Circle)",
    icon_path: "cross_circle",
    icon_keywords: "circle cross delete remove wrong incorrect no close",
  },
  {
    icon_name: "Check",
    icon_path: "check",
    icon_keywords: "check tick approved correct yes",
  },
  {
    icon_name: "Cross",
    icon_path: "cross",
    icon_keywords: "cross delete remove wrong incorrect no close",
  },
  {
    icon_name: "Exit (Left)",
    icon_path: "exit_left",
    icon_keywords: "exit left",
  },
  {
    icon_name: "Exit (Right)",
    icon_path: "exit_right",
    icon_keywords: "exit right",
  },
  {
    icon_name: "Folder",
    icon_path: "folder_closed",
    icon_keywords: "folder closed documents file files",
  },
  {
    icon_name: "Folder (Open)",
    icon_path: "folder_open",
    icon_keywords: "folder open documents file files",
  },
  {
    icon_name: "Lightning",
    icon_path: "lightning",
    icon_keywords: "lightning charge charging bolt electricity",
  },
  {
    icon_name: "Lightning (Alt)",
    icon_path: "lightning_alt",
    icon_keywords: "lightning charge charging bolt electricity",
  },
  {
    icon_name: "Message",
    icon_path: "message",
    icon_keywords: "message comment text writing",
  },
  {
    icon_name: "Message (Writing)",
    icon_path: "message_writing",
    icon_keywords: "message comment text writing",
  },
  {
    icon_name: "Search",
    icon_path: "search",
    icon_keywords: "search magnifying glass",
  },
  {
    icon_name: "Sliders",
    icon_path: "sliders",
    icon_keywords: "sliders preferences settings options",
  },
  {
    icon_name: "Thumbs Up",
    icon_path: "thumbs_up",
    icon_keywords: "thumbs up like unlike",
  },
  {
    icon_name: "Thumbs Down",
    icon_path: "thumbs_down",
    icon_keywords: "thumbs down like unlike",
  },
  {
    icon_name: "Version",
    icon_path: "version",
    icon_keywords: "versions stacks stacked levels layer layers",
  },
  {
    icon_name: "Versions",
    icon_path: "versions",
    icon_keywords: "versions stacks stacked levels layer layers",
  },
  {
    icon_name: "Coffee",
    icon_path: "coffee",
    icon_keywords: "coffee caffeine perk",
  },
  {
    icon_name: "Compass",
    icon_path: "compass",
    icon_keywords: "compass safari",
  },
  {
    icon_name: "Document",
    icon_path: "document",
    icon_keywords: "document file",
  },
  {
    icon_name: "Download",
    icon_path: "download",
    icon_keywords: "download",
  },
  {
    icon_name: "Download (Alt)",
    icon_path: "download_alt",
    icon_keywords: "download alt",
  },
  {
    icon_name: "Upload",
    icon_path: "upload",
    icon_keywords: "upload",
  },
  {
    icon_name: "Upload (Alt)",
    icon_path: "upload_alt",
    icon_keywords: "upload",
  },
  {
    icon_name: "Location",
    icon_path: "location",
    icon_keywords: "location world space map pin spot",
  },
  {
    icon_name: "Lock (Closed)",
    icon_path: "lock",
    icon_keywords: "lock padlock security",
  },
  {
    icon_name: "Lock (Open)",
    icon_path: "lock_open",
    icon_keywords: "lock padlock security",
  },
  {
    icon_name: "Mail",
    icon_path: "mail",
    icon_keywords: "mail email send receive news communicate communication",
  },
  {
    icon_name: "Mail (Open)",
    icon_path: "mail_open",
    icon_keywords: "mail email send receive news communicate communication",
  },
  {
    icon_name: "Mail (New)",
    icon_path: "mail_new",
    icon_keywords: "mail_ ew",
  },
  {
    icon_name: "Mail (Delete)",
    icon_path: "mail_delete",
    icon_keywords: "mail email send receive news communicate communication",
  },
  {
    icon_name: "Mail (Remove)",
    icon_path: "mail_remove",
    icon_keywords: "mail email send receive news communicate communication",
  },
  {
    icon_name: "Mail (Add)",
    icon_path: "mail_add",
    icon_keywords: "mail email send receive news communicate communication",
  },
  {
    icon_name: "Mail (Minus)",
    icon_path: "mail_minus",
    icon_keywords: "mail email send receive news communicate communication",
  },
  {
    icon_name: "Maximise",
    icon_path: "maximise",
    icon_keywords: "maximise",
  },
  {
    icon_name: "Paper",
    icon_path: "paper",
    icon_keywords: "paper document file",
  },
  {
    icon_name: "Paper Folded",
    icon_path: "paper_folded",
    icon_keywords: "paper folded document file",
  },
  {
    icon_name: "Share",
    icon_path: "share",
    icon_keywords: "share arrow box send",
  },
  {
    icon_name: "Share (Alt)",
    icon_path: "share_alt",
    icon_keywords: "share arrow box send",
  },
  {
    icon_name: "Archive",
    icon_path: "archive",
    icon_keywords: "archive box save",
  },
  {
    icon_name: "Unarchive",
    icon_path: "unarchive",
    icon_keywords: "unarchive box save",
  },
  {
    icon_name: "Chevron Up",
    icon_path: "chevron_up",
    icon_keywords: "chevron up arrow arrows direction",
  },
  {
    icon_name: "Chevron Down",
    icon_path: "chevron_down",
    icon_keywords: "chevron down arrow arrows direction",
  },
  {
    icon_name: "Chevron Left",
    icon_path: "chevron_left",
    icon_keywords: "chevron left arrow arrows direction",
  },
  {
    icon_name: "Chevron Right",
    icon_path: "chevron_right",
    icon_keywords: "chevron right arrow arrows direction",
  },
  {
    icon_name: "Double Chevron Up",
    icon_path: "chevron_up_double",
    icon_keywords: "chevron up double arrow arrows direction",
  },
  {
    icon_name: "Double Chevron Down",
    icon_path: "chevron_down_double",
    icon_keywords: "chevron down double arrow arrows direction",
  },
  {
    icon_name: "Double Chevron Left",
    icon_path: "chevron_left_double",
    icon_keywords: "chevron left double arrow arrows direction",
  },
  {
    icon_name: "Double Chevron Right",
    icon_path: "chevron_right_double",
    icon_keywords: "chevron right double arrow arrows direction",
  },
  {
    icon_name: "Chevron Up (Circle)",
    icon_path: "chevron_up_circle",
    icon_keywords: "chevron up circle arrow arrows direction",
  },
  {
    icon_name: "Chevron Down (Circle)",
    icon_path: "chevron_down_circle",
    icon_keywords: "chevron down circle arrow arrows direction",
  },
  {
    icon_name: "Chevron Left (Circle)",
    icon_path: "chevron_left_circle",
    icon_keywords: "chevron left circle arrow arrows direction",
  },
  {
    icon_name: "Chevron Right (Circle)",
    icon_path: "chevron_right_circle",
    icon_keywords: "chevron right circle arrow arrows direction",
  },
  {
    icon_name: "Funnel",
    icon_path: "funnel",
    icon_keywords: "funnel",
  },
  {
    icon_name: "Thread",
    icon_path: "thread",
    icon_keywords: "thread chat discuss",
  },
  {
    icon_name: "Star",
    icon_path: "star",
    icon_keywords: "star favourite favorite",
  },
  {
    icon_name: "User (Female)",
    icon_path: "user",
    icon_keywords: "user female person customer avatar",
  },
  {
    icon_name: "User (Male)",
    icon_path: "user_male",
    icon_keywords: "user male person customer avatar",
  },
  {
    icon_name: "User (Add)",
    icon_path: "user_add",
    icon_keywords: "user add",
  },
  {
    icon_name: "User (Remove)",
    icon_path: "user_remove",
    icon_keywords: "user remove",
  },
  {
    icon_name: "User (Female Circle)",
    icon_path: "user_circle",
    icon_keywords: "user female circle person customer avatar",
  },
  {
    icon_name: "User (Male Circle)",
    icon_path: "user_male_circle",
    icon_keywords: "user male circle person customer avatar",
  },
  {
    icon_name: "Users",
    icon_path: "users",
    icon_keywords: "users male circle person customer avatar",
  },
  {
    icon_name: "Redo",
    icon_path: "redo",
    icon_keywords: "redo arrow",
  },
  {
    icon_name: "Undo",
    icon_path: "undo",
    icon_keywords: "undo arrow",
  },
  {
    icon_name: "Jump Left",
    icon_path: "jump_left",
    icon_keywords: "jump left arrow",
  },
  {
    icon_name: "jump Right",
    icon_path: "jump_right",
    icon_keywords: "jump right arrow",
  },
  {
    icon_name: "Jump Forward",
    icon_path: "jump_forward",
    icon_keywords: "jump forward arrow",
  },
  {
    icon_name: "Jump Backward",
    icon_path: "jump_backward",
    icon_keywords: "jump backward reply respond arrow",
  },
  {
    icon_name: "Plus",
    icon_path: "plus",
    icon_keywords: "add plus",
  },
  {
    icon_name: "Minus",
    icon_path: "minus",
    icon_keywords: "minus remove negative take circle",
  },
  {
    icon_name: "Plus (Circle)",
    icon_path: "plus_circle",
    icon_keywords: "add plus circle",
  },
  {
    icon_name: "Minus (Circle)",
    icon_path: "minus_circle",
    icon_keywords: "minus remove negative take circle",
  },
  {
    icon_name: "Arrow Up",
    icon_path: "arrow_up",
    icon_keywords: "arrow up",
  },
  {
    icon_name: "Arrow Down",
    icon_path: "arrow_down",
    icon_keywords: "arrow down",
  },
  {
    icon_name: "Arrow Left",
    icon_path: "arrow_left",
    icon_keywords: "arrow left",
  },
  {
    icon_name: "Arrow Right",
    icon_path: "arrow_right",
    icon_keywords: "arrow right",
  },
  {
    icon_name: "Arrow Up (Circle)",
    icon_path: "arrow_up_circle",
    icon_keywords: "arrow up circle",
  },
  {
    icon_name: "Arrow Down (Circle)",
    icon_path: "arrow_down_circle",
    icon_keywords: "arrow down circle",
  },
  {
    icon_name: "Arrow Left (Circle)",
    icon_path: "arrow_left_circle",
    icon_keywords: "arrow left circle",
  },
  {
    icon_name: "Arrow Right(Circle)",
    icon_path: "arrow_right_circle",
    icon_keywords: "arrow right circle",
  },
  {
    icon_name: "Battery",
    icon_path: "battery_full",
    icon_keywords: "battery power",
  },
  {
    icon_name: "Battery Charging",
    icon_path: "battery_charging",
    icon_keywords: "battery charging power",
  },
  {
    icon_name: "Battery Empty",
    icon_path: "battery_empty",
    icon_keywords: "battery empty percent power charging",
  },
  {
    icon_name: "Battery Low",
    icon_path: "battery_low",
    icon_keywords: "battery low percent power charging",
  },
  {
    icon_name: "Battery Half",
    icon_path: "battery_half",
    icon_keywords: "battery half percent power charging",
  },
  {
    icon_name: "Battery 75%",
    icon_path: "battery_75",
    icon_keywords: "battery three quarter 75 percent power charging",
  },
  {
    icon_name: "Enter",
    icon_path: "enter",
    icon_keywords: "enter log in out exit sign sign-in sign-out 'sign out' 'sign in' 'log in' log out' login logout",
  },
  {
    icon_name: "Enter (Alt)",
    icon_path: "enter_alt",
    icon_keywords: "enter log in out exit sign sign-in sign-out 'sign out' 'sign in' 'log in' log out' login logout",
  },
  {
    icon_name: "Inbox",
    icon_path: "inbox",
    icon_keywords: "inbox email archive new",
  },
  {
    icon_name: "Inbox (Alt)",
    icon_path: "inbox_alt",
    icon_keywords: "inbox email archive new",
  },
  {
    icon_name: "List (Bullet)",
    icon_path: "list",
    icon_keywords: "list bullets bulleted",
  },
  {
    icon_name: "List (Numbered)",
    icon_path: "list_numbered",
    icon_keywords: "list numbered",
  },
  {
    icon_name: "Printer",
    icon_path: "printer",
    icon_keywords: "printer",
  },
  {
    icon_name: "Replicate",
    icon_path: "replicate",
    icon_keywords: "replicate squares copy",
  },
  {
    icon_name: "Replicate (Alt)",
    icon_path: "replicate_alt",
    icon_keywords: "replicate squares copy",
  },
  {
    icon_name: "Reuse",
    icon_path: "reuse",
    icon_keywords: "reuse arrows",
  },
  {
    icon_name: "Sort",
    icon_path: "sort",
    icon_keywords: "sort arrows",
  },
  {
    icon_name: "Sort (Alt)",
    icon_path: "sort_alt",
    icon_keywords: "sort arrows",
  },
  {
    icon_name: "Alarm Clock",
    icon_path: "alarm_clock",
    icon_keywords: "alarm clock",
  },
  {
    icon_name: "Chain",
    icon_path: "chain",
    icon_keywords: "chain link web hyperlink anchor chain",
  },
  {
    icon_name: "Link",
    icon_path: "link",
    icon_keywords: "chain link web hyperlink anchor chain",
  },
  {
    icon_name: "Link (Broken)",
    icon_path: "link_broken",
    icon_keywords: "chain link web hyperlink anchor chain",
  },
  {
    icon_name: "Link (Alt)",
    icon_path: "link_alt",
    icon_keywords: "chain link web hyperlink anchor chain",
  },
  {
    icon_name: "Link Horizontal",
    icon_path: "link_horizontal",
    icon_keywords: "chain link web hyperlink anchor chain",
  },
  {
    icon_name: "Link Vertical",
    icon_path: "link_vertical",
    icon_keywords: "chain link web hyperlink anchor chain",
  },
  {
    icon_name: "Unlink Horizontal",
    icon_path: "unlink_horizontal",
    icon_keywords: "chain link web hyperlink anchor chain unlink horizontal",
  },
  {
    icon_name: "Unlink Vertical",
    icon_path: "unlink_vertical",
    icon_keywords: "chain link web hyperlink anchor chain unlink vertical",
  },
  {
    icon_name: "Grid",
    icon_path: "grid",
    icon_keywords: "grid columns rows",
  },
  {
    icon_name: "Grid - Small",
    icon_path: "grid_small",
    icon_keywords: "grid columns rows",
  },
  {
    icon_name: "Fingerprint",
    icon_path: "fingerprint",
    icon_keywords: "fingerprint security bio",
  },
  {
    icon_name: "Refresh",
    icon_path: "refresh",
    icon_keywords: "refresh arrows reset fresh restore",
  },
  {
    icon_name: "Refresh (Alt)",
    icon_path: "refresh_alt",
    icon_keywords: "refresh arrows reset fresh restore",
  },
  {
    icon_name: "Reset",
    icon_path: "reset",
    icon_keywords: "reset restart reboot restore",
  },
  {
    icon_name: "Reset (Alt)",
    icon_path: "reset_alt",
    icon_keywords: "reset restart reboot restore",
  },
  {
    icon_name: "Reset (Forward)",
    icon_path: "reset_forward",
    icon_keywords: "reset forward reset restart reboot restore",
  },
  {
    icon_name: "Reset (Hard)",
    icon_path: "reset_hard",
    icon_keywords: "reset hard reset restart reboot restore",
  },
  {
    icon_name: "Reset (Temporary)",
    icon_path: "reset_temporary",
    icon_keywords: "reset temporary reset restart reboot restore",
  },
  {
    icon_name: "Trash",
    icon_path: "trash",
    icon_keywords: "trash bin rubbish",
  },
  {
    icon_name: "Trash (Alt)",
    icon_path: "trash_alt",
    icon_keywords: "trash bin rubbish",
},
  {
    icon_name: "Bell",
    icon_path: "bell",
    icon_keywords: "bell notification ringing alarm",
  },
  {
    icon_name: "Bell (Ringing)",
    icon_path: "bell_ringing",
    icon_keywords: "bell notification ringing alarm",
  },
  {
    icon_name: "Bell (Disabled)",
    icon_path: "bell_disabled",
    icon_keywords: "bell notification ringing alarm",
  },
  {
    icon_name: "Bell (Snooze)",
    icon_path: "bell_snooze",
    icon_keywords: "bell notification ringing alarm",
  },
  {
    icon_name: "Microphone",
    icon_path: "microphone",
    icon_keywords: "microphone audio speak",
  },
  {
    icon_name: "Microphone (Muted)",
    icon_path: "microphone_muted",
    icon_keywords: "microphone muted speak audio",
  },
  {
    icon_name: "Microphone (Disabled)",
    icon_path: "microphone_disabled",
    icon_keywords: "microphone audio speak",
  },
  {
    icon_name: "Reverse",
    icon_path: "reverse",
    icon_keywords: "reverse undo shuffle switch",
  },
  {
    icon_name: "Reverse (Alt)",
    icon_path: "reverse_alt",
    icon_keywords: "reverse undo shuffle switch",
  },
  {
    icon_name: "Volume (Muted)",
    icon_path: "volume_muted",
    icon_keywords: "volume muted none off",
  },
  {
    icon_name: "Volume (None)",
    icon_path: "volume_0",
    icon_keywords: "volume off none",
  },
  {
    icon_name: "Volume (Low)",
    icon_path: "volume_low",
    icon_keywords: "volume low",
  },
  {
    icon_name: "Volume (High)",
    icon_path: "volume_high",
    icon_keywords: "volume high",
  },
  {
    icon_name: "Volume (Add)",
    icon_path: "volume_add",
    icon_keywords: "volume add",
  },
  {
    icon_name: "Volume (Minus)",
    icon_path: "volume_minus",
    icon_keywords: "volume minus",
  },
  {
    icon_name: "Volume (Disabled)",
    icon_path: "volume_disabled",
    icon_keywords: "volume off",
  },
  {
    icon_name: "Add Button",
    icon_path: "button_add",
    icon_keywords: "button add plus new",
  },
  {
    icon_name: "Minus Button",
    icon_path: "button_minus",
    icon_keywords: "button minus plus new",
  },
  {
    icon_name: "Bookmark (Book)",
    icon_path: "bookmark_book",
    icon_keywords: "bookmark book notepad note pad journal",
  },
  {
    icon_name: "Component (Add)",
    icon_path: "component_add",
    icon_keywords: "component add plus new create",
  },
  {
    icon_name: "Contract",
    icon_path: "contract",
    icon_keywords: "contract",
  },
  {
    icon_name: "Expand",
    icon_path: "expand",
    icon_keywords: "expand",
  },
  {
    icon_name: "Fullscreen",
    icon_path: "fullscreen",
    icon_keywords: "fullscreen",
  },
  {
    icon_name: "Minimise",
    icon_path: "minimise",
    icon_keywords: "minimise",
  },
  {
    icon_name: "Height",
    icon_path: "height",
    icon_keywords: "height out",
  },
  {
    icon_name: "Width",
    icon_path: "width",
    icon_keywords: "width out",
  },
  {
    icon_name: "Expand Height",
    icon_path: "expand_height",
    icon_keywords: "expand height out",
  },
  {
    icon_name: "Expand Width",
    icon_path: "expand_width",
    icon_keywords: "expand width out",
  },
  {
    icon_name: "Display",
    icon_path: "display",
    icon_keywords: "display project extend",
  },
  {
    icon_name: "Display (Alt)",
    icon_path: "display_alt",
    icon_keywords: "display project extend",
  },
  {
    icon_name: "Folder (Add)",
    icon_path: "folder_add",
    icon_keywords: "folder new create add plus",
  },
  {
    icon_name: "Folder (Minus)",
    icon_path: "folder_minus",
    icon_keywords: "folder new create minus plus",
  },
  {
    icon_name: "Move",
    icon_path: "move",
    icon_keywords: "move cursor",
  },
  {
    icon_name: "Drag",
    icon_path: "drag",
    icon_keywords: "drag handle",
  },
  {
    icon_name: "Drag (Circle)",
    icon_path: "drag_circle",
    icon_keywords: "drag circle handle",
  },
  {
    icon_name: "Newspaper",
    icon_path: "newspaper",
    icon_keywords: "newspaper paper read",
  },
  {
    icon_name: "List (Add)",
    icon_path: "list_add",
    icon_keywords: "list new add",
  },
  {
    icon_name: "Coin",
    icon_path: "coin",
    icon_keywords: "coins money",
  },
  {
    icon_name: "Coins",
    icon_path: "coins",
    icon_keywords: "coins money stack",
  },
  {
    icon_name: "Cylinder",
    icon_path: "cylinder",
    icon_keywords: "cylinder shape geometry",
  },
  {
    icon_name: "Database",
    icon_path: "database",
    icon_keywords: "database servers",
  },
  {
    icon_name: "Disc",
    icon_path: "disc",
    icon_keywords: "disc technology media cd",
  },
  {
    icon_name: "Server",
    icon_path: "server",
    icon_keywords: "server computer technology stack",
  },
  {
    icon_name: "Heart Rate",
    icon_path: "heart_rate",
    icon_keywords: "heart rate monitor health",
  },
  {
    icon_name: "Projector",
    icon_path: "projector",
    icon_keywords: "projector screen presentation display",
  },
  {
    icon_name: "Revert",
    icon_path: "revert",
    icon_keywords: "revert back undo rewind",
  },
  {
    icon_name: "Diamond",
    icon_path: "diamond",
    icon_keywords: "diamond gem",
  },
  {
    icon_name: "Venn",
    icon_path: "venn",
    icon_keywords: "venn circles intersect",
  },
  {
    icon_name: "Side Menu",
    icon_path: "side_menu",
    icon_keywords: "side menu navigation",
  },
  {
    icon_name: "Info (Circle)",
    icon_path: "info_circle",
    icon_keywords: "information circle",
  },
  {
    icon_name: "Question (Circle)",
    icon_path: "question_circle",
    icon_keywords: "question circle",
  },
  {
    icon_name: "Warning (Circle)",
    icon_path: "warning_circle",
    icon_keywords: "warning circle",
  },
  {
    icon_name: "Warning (Hex)",
    icon_path: "warning_hex",
    icon_keywords: "warning hex",
  },
  {
    icon_name: "Warning (Triangle)",
    icon_path: "warning_triangle",
    icon_keywords: "warning triangle",
  },
  {
    icon_name: "Bag",
    icon_path: "bag",
    icon_keywords: "bag shopping",
  },
  {
    icon_name: "Branch",
    icon_path: "branch",
    icon_keywords: "branch",
  },
  {
    icon_name: "Browser",
    icon_path: "browser",
    icon_keywords: "browser window",
  },
  {
    icon_name: "Browser (Alt)",
    icon_path: "browser_alt",
    icon_keywords: "browser window",
  },
  {
    icon_name: "Capture",
    icon_path: "capture",
    icon_keywords: "capture shot camera picture",
  },
  {
    icon_name: "Cart",
    icon_path: "cart",
    icon_keywords: "cart shopping trolley trolly",
  },
  {
    icon_name: "Code",
    icon_path: "code",
    icon_keywords: "code development embed",
  },
  {
    icon_name: "Credit Card",
    icon_path: "credit_card",
    icon_keywords: "credit debit card money transfer",
  },
  {
    icon_name: "Filter",
    icon_path: "filter",
    icon_keywords: "filter refine",
  },
  {
    icon_name: "Filter (Circle)",
    icon_path: "filter_circle",
    icon_keywords: "filter circle refine",
  },
  {
    icon_name: "Gauge",
    icon_path: "gauge",
    icon_keywords: "gauge guage chart",
  },
  {
    icon_name: "Graph (Box)",
    icon_path: "graph_box",
    icon_keywords: "graph box chart",
  },
  {
    icon_name: "Bar Graph",
    icon_path: "graph_bar",
    icon_keywords: "graph bar chart",
  },
  {
    icon_name: "Hierarchy",
    icon_path: "hierarchy",
    icon_keywords: "hierarchy branch flow chart",
  },
  {
    icon_name: "Laptop",
    icon_path: "laptop",
    icon_keywords: "laptop computer screen monitor",
  },
  {
    icon_name: "Marquee",
    icon_path: "marquee",
    icon_keywords: "marquee selection",
  },
  {
    icon_name: "Target",
    icon_path: "target",
    icon_keywords: "target aim",
  },
  {
    icon_name: "Ticket",
    icon_path: "ticket",
    icon_keywords: "ticket receipt",
  },
  {
    icon_name: "Toggle",
    icon_path: "toggle",
    icon_keywords: "toggle switch",
  },
  {
    icon_name: "Toggles",
    icon_path: "toggles",
    icon_keywords: "toggle toggles",
  },
  {
    icon_name: "Circle",
    icon_path: "circle",
    icon_keywords: "circle checkbox empty radio off",
  },
  {
    icon_name: "Crosshair",
    icon_path: "crosshair",
    icon_keywords: "crosshair aim middle",
  },
  {
    icon_name: "Face (Delighted)",
    icon_path: "face_delighted",
    icon_keywords: "face delighted emotion smile elated happy",
  },
  {
    icon_name: "Face (Happy)",
    icon_path: "face_happy",
    icon_keywords: "face happy emotion smile",
  },
  {
    icon_name: "Face (Neutral)",
    icon_path: "face_neutral",
    icon_keywords: "face neutral emotion bland meh",
  },
  {
    icon_name: "Face (Sad)",
    icon_path: "face_sad",
    icon_keywords: "face sad emotion frown",
  },
  {
    icon_name: "Push Left",
    icon_path: "push_left",
    icon_keywords: "push left",
  },
  {
    icon_name: "Push Right",
    icon_path: "push_right",
    icon_keywords: "push right",
  },
  {
    icon_name: "Push Down",
    icon_path: "push_down",
    icon_keywords: "push down",
  },
  {
    icon_name: "Push Up",
    icon_path: "push_up",
    icon_keywords: "push up",
  },
  {
    icon_name: "Pull Left",
    icon_path: "pull_left",
    icon_keywords: "pull left",
  },
  {
    icon_name: "Pull Right",
    icon_path: "pull_right",
    icon_keywords: "pull right",
  },
  {
    icon_name: "Pull Down",
    icon_path: "pull_down",
    icon_keywords: "pull down",
  },
  {
    icon_name: "Pull Up",
    icon_path: "pull_up",
    icon_keywords: "pull up",
  },
  {
    icon_name: "Record",
    icon_path: "record",
    icon_keywords: "record on light",
  },
  {
    icon_name: "Shuffle",
    icon_path: "shuffle",
    icon_keywords: "shuffle switch repeat music",
  },
  {
    icon_name: "Support",
    icon_path: "support",
    icon_keywords: "support life saver preserver lifebuoy help",
  },
  {
    icon_name: "Zoom In",
    icon_path: "zoom_in",
    icon_keywords: "zoom plus in magnifying glass",
  },
  {
    icon_name: "Zoom Out",
    icon_path: "zoom_out",
    icon_keywords: "zoom minus out magnifying glass",
  },
  {
    icon_name: "Zoom Reset",
    icon_path: "zoom_reset",
    icon_keywords: "zoom reset magnifying glass",
  },
  {
    icon_name: "Zoom Cancel",
    icon_path: "zoom_cancel",
    icon_keywords: "zoom cancel magnifying glass",
  },
  {
    icon_name: "Airplay",
    icon_path: "airplay",
    icon_keywords: "airplay apple mac share send receive",
  },
  {
    icon_name: "Align Horizontal",
    icon_path: "align_horizontal",
    icon_keywords: "align horizontal",
  },
  {
    icon_name: "Align Vertical",
    icon_path: "align_vertical",
    icon_keywords: "align vertical",
  },
  {
    icon_name: "Angle",
    icon_path: "angle",
    icon_keywords: "angle compass corner acute degree",
  },
  {
    icon_name: "Arrow Bottom Left",
    icon_path: "arrow_bottom_left",
    icon_keywords: "arrow bottom left corner point",
  },
  {
    icon_name: "Arrow Bottom Right",
    icon_path: "arrow_bottom_right",
    icon_keywords: "arrow bottom right corner point",
  },
  {
    icon_name: "Arrow Top Left",
    icon_path: "arrow_top_left",
    icon_keywords: "arrow top left corner point",
  },
  {
    icon_name: "Arrow Top Right",
    icon_path: "arrow_top_right",
    icon_keywords: "arrow top right corner point",
  },
  {
    icon_name: "Audio Wave",
    icon_path: "audio_wave",
    icon_keywords: "audio wave music sound sounds waves tunes",
  },
  {
    icon_name: "Backspace",
    icon_path: "backspace",
    icon_keywords: "backspace delete",
  },
  {
    icon_name: "Backward",
    icon_path: "backward",
    icon_keywords: "backward jump arrow direction",
  },
  {
    icon_name: "Forward",
    icon_path: "forward",
    icon_keywords: "forward jump arrow direction",
  },
  {
    icon_name: "Upward",
    icon_path: "upward",
    icon_keywords: "jump up arrow direction",
  },
  {
    icon_name: "Downward",
    icon_path: "downward",
    icon_keywords: "jump down arrow direction",
  },
  {
    icon_name: "Bluetooth",
    icon_path: "bluetooth",
    icon_keywords: "bluetooth media",
  },
  {
    icon_name: "Book",
    icon_path: "book",
    icon_keywords: "book",
  },
  {
    icon_name: "Book (With Text)",
    icon_path: "book_text",
    icon_keywords: "book text",
  },
  {
    icon_name: "Book (Closed)",
    icon_path: "book_closed",
    icon_keywords: "book notes closed note",
  },
  {
    icon_name: "Bookmark",
    icon_path: "bookmark",
    icon_keywords: "bookmark book",
  },
  {
    icon_name: "Cube",
    icon_path: "cube",
    icon_keywords: "cube",
  },
  {
    icon_name: "Box",
    icon_path: "box",
    icon_keywords: "box crate carboard 3d",
  },
  {
    icon_name: "Box (Open)",
    icon_path: "box_open",
    icon_keywords: "box open crate carboard 3d",
  },
  {
    icon_name: "Box (Download)",
    icon_path: "box_download",
    icon_keywords: "box download crate carboard 3d",
  },
  {
    icon_name: "Briefcase",
    icon_path: "briefcase",
    icon_keywords: "briefcase business travel important luggage",
  },
  {
    icon_name: "Calculator",
    icon_path: "calculator",
    icon_keywords: "calculator",
  },
  {
    icon_name: "camera",
    icon_path: "camera",
    icon_keywords: "camera snap flash photography photo",
  },
  {
    icon_name: "Camera (Alt)",
    icon_path: "camera_alt",
    icon_keywords: "camera snap flash photography photo",
  },
  {
    icon_name: "Camera (Alt - Flash Off)",
    icon_path: "camera_noflash_alt",
    icon_keywords: "camera snap flash photography photo",
  },
  {
    icon_name: "Camera (Flash Off)",
    icon_path: "camera_noflash",
    icon_keywords: "camera snap flash photography photo",
  },
  {
    icon_name: "Card Timeline",
    icon_path: "card_timeline",
    icon_keywords: "card timeline component view cards",
  },
  {
    icon_name: "Card View",
    icon_path: "card_view",
    icon_keywords: "card view component cards",
  },
  {
    icon_name: "Carousel",
    icon_path: "carousel",
    icon_keywords: "carousel cards view",
  },
  {
    icon_name: "Cast",
    icon_path: "cast",
    icon_keywords: "cast share video chromecast airplay media",
  },
  {
    icon_name: "Checkbox (Empty)",
    icon_path: "checkbox_empty",
    icon_keywords: "checkbox empty unchecked unticked",
  },
  {
    icon_name: "Checkbox (Checked)",
    icon_path: "checkbox_checked",
    icon_keywords: "checkbox checked tick",
  },
  {
    icon_name: "Chevron (Open)",
    icon_path: "chevron_open",
    icon_keywords: "chevron open expand dropdown accordion",
  },
  {
    icon_name: "Chevron (Close)",
    icon_path: "chevron_close",
    icon_keywords: "chevron close contract dropdown accordion",
  },
  {
    icon_name: "Menu (Circle)",
    icon_path: "circle_menu",
    icon_keywords: "circle menu dots hamburger options more",
  },
  {
    icon_name: "Circle Split",
    icon_path: "circle_split",
    icon_keywords: "circle split half",
  },
  {
    icon_name: "Clipboard",
    icon_path: "clipboard",
    icon_keywords: "clipboard",
  },
  {
    icon_name: "Clipboard (Add)",
    icon_path: "clipboard_add",
    icon_keywords: "clipboard add plus",
  },
  {
    icon_name: "Clipboard (Check)",
    icon_path: "clipboard_check",
    icon_keywords: "clipboard check",
  },
  {
    icon_name: "Clipboard (Copy)",
    icon_path: "clipboard_copy",
    icon_keywords: "clipboard copy",
  },
  {
    icon_name: "Clipboard (Cross)",
    icon_path: "clipboard_cross",
    icon_keywords: "clipboard cross",
  },
  {
    icon_name: "Clipboard (Notes)",
    icon_path: "clipboard_notes",
    icon_keywords: "clipboard notes",
  },
  {
    icon_name: "Clipboard (Remove)",
    icon_path: "clipboard_remove",
    icon_keywords: "clipboard remove minus",
  },
  {
    icon_name: "Clock",
    icon_path: "clock",
    icon_keywords: "clock time alarm tick tock",
  },
  {
    icon_name: "Close",
    icon_path: "close",
    icon_keywords: "close cross delete remove x",
  },
  {
    icon_name: "Cloud",
    icon_path: "cloud",
    icon_keywords: "cloud weather",
  },
  {
    icon_name: "Cloud (Disconnect)",
    icon_path: "cloud_disconnect",
    icon_keywords: "cloud disconnect",
  },
  {
    icon_name: "Cloud (Download)",
    icon_path: "cloud_download",
    icon_keywords: "cloud_download",
  },
  {
    icon_name: "Cloud (Download - Alt)",
    icon_path: "cloud_download_alt",
    icon_keywords: "cloud download",
  },
  {
    icon_name: "Cloud (Upload)",
    icon_path: "cloud_upload",
    icon_keywords: "cloud upload",
  },
  {
    icon_name: "Cloud (Upload - Alt)",
    icon_path: "cloud_upload_alt",
    icon_keywords: "cloud upload",
  },
  {
    icon_name: "Contacts",
    icon_path: "contacts",
    icon_keywords: "contacts book people calling",
  },
  {
    icon_name: "Crop",
    icon_path: "crop",
    icon_keywords: "crop resize cut",
  },
  {
    icon_name: "Directions",
    icon_path: "directions",
    icon_keywords: "directions way find",
  },
  {
    icon_name: "Document (Justified)",
    icon_path: "document_justified",
    icon_keywords: "document documents justified paper",
  },
  {
    icon_name: "Document (List)",
    icon_path: "document_list",
    icon_keywords: "document list paper documents",
  },
  {
    icon_name: "Document (Stack)",
    icon_path: "document_stack",
    icon_keywords: "document stack documents",
  },
  {
    icon_name: "Document (Words)",
    icon_path: "document_words",
    icon_keywords: "document words documents",
  },
  {
    icon_name: "Door",
    icon_path: "door",
    icon_keywords: "door enter exit entry signin sign in out log",
  },
  {
    icon_name: "Door (Alt)",
    icon_path: "door_alt",
    icon_keywords: "door enter exit entry signin sign in out log",
  },
  {
    icon_name: "Drag (Vertical)",
    icon_path: "drag_vertical",
    icon_keywords: "drag vertical grab reorder",
  },
  {
    icon_name: "Duplicate",
    icon_path: "duplicate",
    icon_keywords: "duplicate copy new make replicate",
  },
  {
    icon_name: "Duplicate (Alt)",
    icon_path: "duplicate_alt",
    icon_keywords: "duplicate copy new make replicate",
  },
  {
    icon_name: "Episodes",
    icon_path: "episodes",
    icon_keywords: "episodes",
  },
  {
    icon_name: "external",
    icon_path: "external",
    icon_keywords: "external share link",
  },
  {
    icon_name: "Eye",
    icon_path: "eye",
    icon_keywords: "eye blink visible invisible see",
  },
  {
    icon_name: "Eye (Closed)",
    icon_path: "eye_closed",
    icon_keywords: "eye blink visible invisible closed off see",
  },
  {
    icon_name: "Eye (Off)",
    icon_path: "eye_no",
    icon_keywords: "eye blink visible invisible closed off unavailable see",
  },
  {
    icon_name: "File (Download)",
    icon_path: "file_download",
    icon_keywords: "file download",
  },
  {
    icon_name: "File (Upload)",
    icon_path: "file_upload",
    icon_keywords: "file upload new",
  },
  {
    icon_name: "Files_history",
    icon_path: "files_history",
    icon_keywords: "files files history old time",
  },
  {
    icon_name: "Files (Multi)",
    icon_path: "files_multi",
    icon_keywords: "files multi",
  },
  {
    icon_name: "Files (Stack)",
    icon_path: "files_stack",
    icon_keywords: "files stack",
  },
  {
    icon_name: "Film",
    icon_path: "film",
    icon_keywords: "film video record",
  },
  {
    icon_name: "Filter (Single)",
    icon_path: "filter_single",
    icon_keywords: "filter single filtering",
  },
  {
    icon_name: "Filtering",
    icon_path: "filtering",
    icon_keywords: "filter filtering",
  },
  {
    icon_name: "Flag",
    icon_path: "flag",
    icon_keywords: "flag country surrender nation nationality flags location",
  },
  {
    icon_name: "Flame",
    icon_path: "flame",
    icon_keywords: "flame fire light lighter hot heat",
  },
  {
    icon_name: "Flame (Alt)",
    icon_path: "flame_alt",
    icon_keywords: "flame fire light lighter hot heat",
  },
  {
    icon_name: "Flip View",
    icon_path: "flip_view",
    icon_keywords: "flip component view safari tabs",
  },
  {
    icon_name: "Floppy",
    icon_path: "floppy",
    icon_keywords: "floppy disk save old",
  },
  {
    icon_name: "Fork Git",
    icon_path: "fork_git",
    icon_keywords: "fork git branch break",
  },
  {
    icon_name: "Frame",
    icon_path: "frame",
    icon_keywords: "frame crop center",
  },
  {
    icon_name: "Gift",
    icon_path: "gift",
    icon_keywords: "gift present joy celebrate birthday christmas",
  },

  {
    icon_name: "Globe",
    icon_path: "globe",
    icon_keywords: "globe world countries country foreign nation earth planet global location",
  },
  {
    icon_name: "GPS",
    icon_path: "gps",
    icon_keywords: "gps global position",
  },
  {
    icon_name: "Graph (Increase)",
    icon_path: "graph_increase",
    icon_keywords: "graph_increase",
  },
  {
    icon_name: "Grid (Circles)",
    icon_path: "grid_circles",
    icon_keywords: "grid circles dashboard summary projects project",
  },
  {
    icon_name: "Grid (Circles - Add)",
    icon_path: "grid_circles_add",
    icon_keywords: "grid circles add dashboard summary projects project new",
  },
  {
    icon_name: "Grid (Squares)",
    icon_path: "grid_squares",
    icon_keywords: "grid squares dashboard summary projects project",
  },
  {
    icon_name: "Grid (Squares - Add)",
    icon_path: "grid_squares_add",
    icon_keywords: "grid squares add dashboard summary projects project new",
  },
  {
    icon_name: "Hand",
    icon_path: "hand",
    icon_keywords: "hand cursor grab ungrab move",
  },
  {
    icon_name: "Hand (Grab)",
    icon_path: "grab",
    icon_keywords: "hand cursor grab ungrab move",
  },
  {
    icon_name: "Harddrive",
    icon_path: "harddrive",
    icon_keywords: "harddrive storage system SSD HDD",
  },
  {
    icon_name: "Hash",
    icon_path: "hash",
    icon_keywords: "hash hashmark trending twitter hashtag tag",
  },
  {
    icon_name: "Heart",
    icon_path: "heart",
    icon_keywords: "heart love connection favourite favorite like",
  },
  {
    icon_name: "Heart (Remove)",
    icon_path: "heart_remove",
    icon_keywords: "heart love connection favourite unfavourite favorite unfavorite like",
  },
  {
    icon_name: "Home",
    icon_path: "home",
    icon_keywords: "home dashboard landing return dash",
  },
  {
    icon_name: "Home (Alt)",
    icon_path: "home_alt",
    icon_keywords: "home dashboard landing return dash",
  },
  {
    icon_name: "Home (Check)",
    icon_path: "home_check",
    icon_keywords: "home check dashboard landing return dash",
  },
  {
    icon_name: "Home (With Door)",
    icon_path: "home_door",
    icon_keywords: "home door dashboard landing return dash",
  },
  {
    icon_name: "Import",
    icon_path: "import",
    icon_keywords: "import box upload download pull",
  },
  {
    icon_name: "Keyboard",
    icon_path: "keyboard",
    icon_keywords: "keyboard input computer peripheral key",
  },
  {
    icon_name: "lightbulb",
    icon_path: "lightbulb",
    icon_keywords: "lightbulb on light shine off",
  },
  {
    icon_name: "Lightbulb (On)",
    icon_path: "lightbulb_on",
    icon_keywords: "lightbulb on light shine",
  },
  {
    icon_name: "Lineweight",
    icon_path: "lineweight",
    icon_keywords: "lineweight lines stroke weight thick thicc thickness text editing",
  },
  {
    icon_name: "Loader",
    icon_path: "loader",
    icon_keywords: "loader loading load spinner",
  },
  {
    icon_name: "Menu (Hamburger)",
    icon_path: "menu_hamburger",
    icon_keywords: "menu hamburger more options drag",
  },
  {
    icon_name: "Menu Horizontal",
    icon_path: "menu_horizontal",
    icon_keywords: "menu horizontal options more drag",
  },
  {
    icon_name: "Menu Vertical",
    icon_path: "menu_vertical",
    icon_keywords: "menu vertical options more drag",
  },
  {
    icon_name: "Midpoint",
    icon_path: "midpoint",
    icon_keywords: "midpoint safe view crosshair",
  },
  {
    icon_name: "Mini Player",
    icon_path: "mini_player",
    icon_keywords: "mini player minimise video",
  },
  {
    icon_name: "No Symbol",
    icon_path: "no_sign",
    icon_keywords: "no sign do not enter bad not allowed",
  },
  {
    icon_name: "Notebook",
    icon_path: "notebook",
    icon_keywords: "notebook secrets pages text notes note book page",
  },
  {
    icon_name: "Notification",
    icon_path: "notification",
    icon_keywords: "notification alerts ios alert update",
  },
  {
    icon_name: "Nut",
    icon_path: "nut",
    icon_keywords: "nut settings tools fix",
  },
  {
    icon_name: "Pages",
    icon_path: "pages",
    icon_keywords: "pages paper stack documents files",
  },
  {
    icon_name: "Panel (Top)",
    icon_path: "panel_top",
    icon_keywords: "panel top component align view windows windowed window app",
  },
  {
    icon_name: "Panel (Bottom)",
    icon_path: "panel_bottom",
    icon_keywords: "panel bottom component align view windows windowed window app",
  },
  {
    icon_name: "Panel (Center)",
    icon_path: "panel_center",
    icon_keywords: "panel center component align view windows windowed window app",
  },
  {
    icon_name: "Panel (Left)",
    icon_path: "panel_left",
    icon_keywords: "panel left component align view windows windowed window app",
  },
  {
    icon_name: "Panel (Right)",
    icon_path: "panel_right",
    icon_keywords: "panel right component align view windows windowed window app",
  },
  {
    icon_name: "Panel (Sectioned)",
    icon_path: "panel_sectioned",
    icon_keywords: "panel sectioned component align view windows windowed window app",
  },
  {
    icon_name: "Paper Plane",
    icon_path: "paper_plane",
    icon_keywords: "paper plane email send receive mail throw",
  },
  {
    icon_name: "Paper Plane (Alt)",
    icon_path: "paper_plane_alt",
    icon_keywords: "paper plane email send receive mail throw",
  },
  {
    icon_name: "Paragraph (Start)",
    icon_path: "paragraph_start",
    icon_keywords: "paragraph start typography edit styles text writing",
  },
  {
    icon_name: "Paragraph (End)",
    icon_path: "paragraph_end",
    icon_keywords: "paragraph end typography edit styles text writing",
  },
  {
    icon_name: "Paragraph (Center)",
    icon_path: "paragraph_center",
    icon_keywords: "paragraph center typography edit styles text writing",
  },
  {
    icon_name: "Paragraph (Left)",
    icon_path: "paragraph_left",
    icon_keywords: "paragraph left typography edit styles text writing",
  },
  {
    icon_name: "Paragraph (Right)",
    icon_path: "paragraph_right",
    icon_keywords: "paragraph right typography edit styles text writing",
  },
  {
    icon_name: "Picture",
    icon_path: "picture",
    icon_keywords: "picture landscape image img scene photo photograph",
  },
  {
    icon_name: "Pie (Half)",
    icon_path: "pie_half",
    icon_keywords: "pie half chart split fraction maths math",
  },
  {
    icon_name: "Pie (Quarter)",
    icon_path: "pie_quarter",
    icon_keywords: "pie quarter chart split fraction maths math",
  },
  {
    icon_name: "Pie (Third)",
    icon_path: "pie_third",
    icon_keywords: "pie third chart split fraction maths math",
  },
  {
    icon_name: "Play Button",
    icon_path: "play_button",
    icon_keywords: "play button video youtube",
  },
  {
    icon_name: "Postcard",
    icon_path: "postcard",
    icon_keywords: "postcard send receive mail email post message",
  },
  {
    icon_name: "Radio (On)",
    icon_path: "radio_on",
    icon_keywords: "radio on button toggle",
  },
  {
    icon_name: "Receipt",
    icon_path: "receipt",
    icon_keywords: "receipt money proof currency invoice",
  },
  {
    icon_name: "Retweet",
    icon_path: "retweet",
    icon_keywords: "retweet twitter rehash",
  },
  {
    icon_name: "Rocket",
    icon_path: "rocket",
    icon_keywords: "rocket ship send shipit submit takeoff",
  },
  {
    icon_name: "Ruler",
    icon_path: "ruler",
    icon_keywords: "ruler measure",
  },
  {
    icon_name: "Scale",
    icon_path: "scale",
    icon_keywords: "scale big small size",
  },
  {
    icon_name: "Scale (Contract)",
    icon_path: "scale_contract",
    icon_keywords: "scale contract big small size",
  },
  {
    icon_name: "Scale (Extend)",
    icon_path: "scale_extend",
    icon_keywords: "scale extend big small size expand",
  },
  {
    icon_name: "Scalpel",
    icon_path: "scalpel",
    icon_keywords: "scalpel cut surgeon doctor",
  },
  {
    icon_name: "Settings",
    icon_path: "settings",
    icon_keywords: "settings cog setting tools preferences",
  },
  {
    icon_name: "Slash Backward",
    icon_path: "slash_backward",
    icon_keywords: "slash backward back backslash",
  },
  {
    icon_name: "Slash Forward",
    icon_path: "slash_forward",
    icon_keywords: "slash forward forwardslash",
  },
  {
    icon_name: "Speaker",
    icon_path: "speaker",
    icon_keywords: "speaker audio music hear hearing",
  },
  {
    icon_name: "Split",
    icon_path: "split",
    icon_keywords: "split window windows windowed app component view",
  },
  {
    icon_name: "Split Three",
    icon_path: "split_three",
    icon_keywords: "split three window windows windowed app component view",
  },
  {
    icon_name: "Sun",
    icon_path: "sun",
    icon_keywords: "sun dark mode sunlight moonlight light",
  },
  {
    icon_name: "Moon",
    icon_path: "moon",
    icon_keywords: "moon dark mode sunlight moonlight light crescent full",
  },
  {
    icon_name: "Swap",
    icon_path: "swap",
    icon_keywords: "swap switch arrows shuffle",
  },
  {
    icon_name: "Switch",
    icon_path: "switch",
    icon_keywords: "switch on off toggle",
  },
  {
    icon_name: "Table",
    icon_path: "table",
    icon_keywords: "table organise list tables data spreadsheet sheet",
  },
  {
    icon_name: "Table (With Header)",
    icon_path: "table_header",
    icon_keywords: "table header organise list tables data spreadsheet sheet",
  },
  {
    icon_name: "Tag Milestone",
    icon_path: "tag_milestone",
    icon_keywords: "tag milestone note noted",
  },
  {
    icon_name: "Timeline",
    icon_path: "timeline",
    icon_keywords: "timeline order gantt",
  },
  {
    icon_name: "Todo",
    icon_path: "todo",
    icon_keywords: "todo check task pending options",
  },
  {
    icon_name: "Translate",
    icon_path: "translate",
    icon_keywords: "translate translation language support countries country speaking",
  },
  {
    icon_name: "Trophy",
    icon_path: "trophy",
    icon_keywords: "trophy medal win success",
  },
  {
    icon_name: "TV Mode",
    icon_path: "tv_mode",
    icon_keywords: "tv mode television switch fullscreen cast",
  },
  {
    icon_name: "Undo History",
    icon_path: "undo_history",
    icon_keywords: "undo history mistake revert",
  },
  {
    icon_name: "Video",
    icon_path: "video",
    icon_keywords: "video film play youtube",
  },
  {
    icon_name: "Wallet",
    icon_path: "wallet",
    icon_keywords: "wallet money cash dollars yen bucks",
  },
  {
    icon_name: "Waves",
    icon_path: "waves",
    icon_keywords: "waves wifi send receive",
  },
  {
    icon_name: "Wifi",
    icon_path: "wifi",
    icon_keywords: "wifi wireless fidelity",
  },
  {
    icon_name: "Wifi (Error)",
    icon_path: "wifi_error",
    icon_keywords: "wifi error wireless fidelity",
  },
  {
    icon_name: "Wifi (None)",
    icon_path: "wifi_none",
    icon_keywords: "wifi none wireless fidelity",
  },
  {
    icon_name: "Window Collapse Left",
    icon_path: "window_collapse_left",
    icon_keywords: "window collapse left app view component windows windowed collapse expand push",
  },
  {
    icon_name: "Window Collapse Right",
    icon_path: "window_collapse_right",
    icon_keywords: "window collapse right app view component windows windowed collapse expand push",
  },
  {
    icon_name: "Window Content",
    icon_path: "window_content",
    icon_keywords: "window collapse app view component windows windowed collapse text browser",
  },
  {
    icon_name: "Window",
    icon_path: "window",
    icon_keywords: "window collapse app view component windows windowed browser",
  },
  {
    icon_name: "Wrap Back",
    icon_path: "wrap_back",
    icon_keywords: "wrap back arrows jump backward left",
  },
  {
    icon_name: "Wrap Forward",
    icon_path: "wrap_forward",
    icon_keywords: "wrap forward arrows jump forward right",
  },
];
