//silent is golden
//songz meng

(function qe_expressTool(thisObj) {

	//string 
	var qe_str = {
		title: {
			en: "quick expression tool",
			cn: "快捷表达式工具"
		},
		copyright: {
			en: "Copyright (c) 2019 songz meng",
			cn: "Copyright (c) 2019 songz meng"
		},
		version: {
			en: " v1.11",
			cn: " v1.11"
		},
		descript: {
			en: "descript",
			cn: "概述"
		},
		usage: {
			en: "usage",
			cn: "使用"
		},
		about: {
			en: "about",
			cn: "关于"
		},
		other: {
			en: "other script",
			cn: "其他脚本"
		},
		close: {
			en: "close",
			cn: "关闭"
		},

		importTip: {
			en: "import expression from Property",
			cn: "导入表达式"
		},
		exportTip: {
			en: "export to Properties",
			cn: "导出表达式到属性"
		},
		toggleTip: {
			en: "toggle Props' expressions\nkbar argument: toggle",
			cn: "开/关所属性的表达式\nkbar 参数: toggle"
		},
		deleteTip: {
			en: "delete Props' expressions\nkbar argument: delete",
			cn: "删除所选属性的表达式\nkbar 参数: delete"
		},
		beautyTip: {
			en: "expression beauty\nkbar argument: beauty",
			cn: "格式化表达式\nkbar 参数: beauty"
		},
		pickTip: {
			en: "get Prop's path",
			cn: "提取属性的路径"
		},
		absolute: {
			en: "absolute",
			cn: "绝对值"
		},
		relative: {
			en: "relative",
			cn: "相对值"
		},
		website: {
			en: "https://github.com/msongz",
			cn: "https://github.com/msongz"
		},
		mail: {
			en: "songzmeng@gmail.com",
			cn: "msongz@qq.com"
		},
		errorOneProp: {
			en: "Please selected only one property",
			cn: "请 [只] 选择一个属性"
		},
		errorNotSet: {
			en: "selected property can not be set expression",
			cn: "所选属性不支持表达式"
		},
		useContent: {
			en: "▶import : import the property\\'s expression to the text area\\n\\n▶export : export the text to selected properties\\n\\n▶toggle : enable or disable your properties\\' expressions\\n\\n▶delete : delete your properties\\' expressions\\n\\n▶beauty : beautify text area and your expressions\\n\\n▶pick : get the property\\'s path\\n\\n* support absolute or relative path\\n\\n* support batch operations except import and pick",
			cn: "▶导入: 导入属性的表达式到文本框\\n\\n▶导出: 导出表达式到所选属性\\n\\n▶开关: 启用或禁用所选属性的表达式\\n\\n▶删除: 删除所选属性的表达式\\n\\n▶美化: 美化文本框和所选属性的表达式\\n\\n▶吸管: 提取属性的表达式路径\\n\\n* 支持绝对值和相对值路径\\n\\n* 支持批量操作，除了导入和吸管\\n"
		},
		desContent: {
			en: function () {
				return this.title + this.version + "\\n" + this.copyright + "\\n" + this.mail + "\\n\\nthis scritp allows you to operate the properties\\' expression quickly and convenience\\n\\nsuper thanks:\\nredefinery.com\\njsbeautifier.org";
			},
			cn: function () {
				return this.title + this.version + "\\n" + this.copyright + "\\n" + this.mail + "\\n\\n这个脚本提供你方便快捷的操作属性的表达式\\n\\n特别感谢:\\nredefinery.com\\njsbeautifier.org";
			}
		},
		cleanTip: {
			en: "clear,can't undo!",
			cn: "清空，不可撤回！"
		},
		kbarErr: {
			en: "error kbar argument, please try 'beauty','toggle'or'delete'",
			cn: "错误的 kbar 参数，请尝试'beauty','toggle'或者'delete'"
		},
		aa: {
			en: "abc",
			cn: "飒飒的"
		}
	};

	//localize
	for (var i in qe_str) {
		if ("zh_CN" == app.isoLanguage) {
			qe_str[i] = qe_str[i].cn;
		} else {
			qe_str[i] = qe_str[i].en;
		}
	}

	//UI
	function qe_buildUI(thisObj) {
		var bgYellow = [1, 1, 67 / 255];
		var bgPink = [185 / 255, 0, 1];
		//images
		var up = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1E\x00\x00\x00\x1E\b\x06\x00\x00\x00;0\u00AE\u00A2\x00\x00\x00\tpHYs\x00\x00\x0B\x12\x00\x00\x0B\x12\x01\u00D2\u00DD~\u00FC\x00\x00\x01`IDATH\u00C7\u00ED\u00D6=\u008A\u00C2@\x14\x07\u00F0\u00E7C\u0082id\u00CB\u0085\u0080\u00E0\x01\u0084\x01\u00B1\u00D1\x13X\u00AC\u0085)\u00F7\x04v\u00DE\u00C6\u00CA.\n\x16Y\u00C4\x15\u00EB\x14bc\u0093\x13\u00B8\x10\x116]\x1A3\u00E2\u00C7\u00BC-V\u00F73b2\u00A3\u00D8\u00E4\u00C143\u0093\u00FC\u00E6\u00CF$\u00CCd\u0088\b\u00EEQ\bw\u00AA\x14N\u00E1\u009BU6\u00F1\x13\u00BC\u00C7\u00C4\x16g\x00\x00\u00A8\u0089*\u00E8\u00CF\u00EE\u00ED\x13\x1F\u00D1\u0095]\u00D0WvA\x17[\u009C\x01\u00EF\u00B1\u00DB&\u00FE\u0081\u00BA\u00AD\u00CA\u00A9W7Lo\u0086\u00D0K\u009C\x1C\x15Pp[\x15\u0090M\u008E\u00B2\u00A8*\u008E*\u00A8\n\u008E\u00AA\u00A8,\u008E\u00D7@epL\u008A\u00E6K\x01\u00D4\u0097C\u00AA/\u0087\u0094/\x05\u00D28&Ek\x13\u0087\u00F6\u00EB\u00ECx\u00BF\u00CE\u008Ek\x13G\x1AG\x194Wl6r\u00C5fC\x05G\x19\u00F4\u00D4\u00AF\u0082#\x00\u0080\f*\u0089?\u00C4\u00FA\u008F/\u00A1q\u00F1\u00B3{\u008C\u009A\u00A8\x1A\u00A6\u00C7Yg\u009E\x18\u00BD\u0084\u00B3\u00CE\x1C\f\u00D3\u00E3\u00C7\u0093\u00EC{\u0080\u0088>[h\u00B1C\u00D0\x0F\u00BD\u00EE\u0094\u009C\u00B2O;\x7F \u00F8\u00C2\x1E}\u008D\u00C7l|a\u008Fv\u00FE@8e\u009F\u00BC\u00EE\u0094\x0EA?\u00A4\u00D0b\x7F\u00E7e~]o\u008F\x1F\x19jB\u00DF\u00BC\u00EB\u00AFq\u0092F\u00D5\u00E6\u00EDe\u0094{\u00E4Ob\u008B\u00FC\u00EC\u0099\u00FDo\u00D5\u00A1\u00C5(\u00B4\u00DAI\u0093F\u00BC\u00A7\x1D\u00954:qz\u00D9K\u00E1+\u00D6\x07\u00C8\u00DA\u00F2\u00D9\u009Fs\u008B,\x00\x00\x00\x00IEND\u00AEB`\u0082";
		var dw = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1E\x00\x00\x00\x1E\b\x06\x00\x00\x00;0\u00AE\u00A2\x00\x00\x00\tpHYs\x00\x00\x0B\x12\x00\x00\x0B\x12\x01\u00D2\u00DD~\u00FC\x00\x00\x01\u0087IDATH\u00C7\u00ED\u00D6\u00BFj\u00C2P\x14\x06\u00F0/A\x05\x11Zw\u00C17(\x04\u00C4\u00C5\"\u00B8\u00B8\u0088\u009B\u00A3O\u00E0\u00E6\u009B8:\u00B9\x19\u00C1A\u0087P:+\u00A8\u008B\u008B\u00E0\u00AE\x10p\u00C8\u0096\n\u00CDU\u00A39\x1D\u00AA6Vcn\u00AE\x14\u0087z K\u00FE\u00FDr\u00B8_8W\"\"\u00DC\u00A3d\u00DC\u00A9\x1E\u00F0\x7F\u0084\u0099\u00AA\u0080\u00A9\u00D5\u009B\u00DF\u00CC\u00D4*\u0098\u00AA\u00F0\u00C1LU\u009C\u008D<\x02P[\u00CD\u00BB\u009A\u00A8\u00B9\x7F\u00B6\u00E6l\u00E4\u0091\x17.\u00FFF\x17\u009Dd\u00B4\u009F\u00CD#\x14\u00DB\x16E\u00F0\u00D5\u00BC\u00AB\u0085b\u00DBb?\u009B\u00C7\u00A2\u0093\u008Cz\u00E2D\x04\u00B2\u009A\u00CA\u00CElYzc@ZdMZdM\u00BD\u0094A\u00B6\u00D1v\u00D8\u00AC\u00A3\x11\x11x\x0E6\u00EBh\u00B6\u00D1vz)\u00E3\u00F8\x1E\u00BD1\u00A0\u009D\u00D9\u00B2\u00C8j*\u00EE{e\x008t:\u00A9\u00A4\u008F\x1F\u00B4\u009C\u00C61,\u00E4$\u00DE\u00CE\x0F\u009D\x0E\x0B9i9\u008D\x1F\u00CFO*\u00E9\u009F\u00CEyS\u00CD\u008B{\u00A1\u00BE\u00A9\u0096#N&Q\u00D2\u0099R\x1F\x07\u00C6\u00FDP\u00A5>F\u00A2\u00A439\u00E2d\u00CE;\u008E\u0096'\"x 4Z\u009E\u00B8\u00AFI'\u00D3\u00C9\u0095l\u00F7z\x1F\u00EA\u00E9\u00C5\u00C4\u00EB{\u008F\u00B6\u009F\u00A17\x00\x10E\u00CF\u00E1\x008\x00\u0088\u00A2\u0097a\x0E<\u00FCl\x03\x00\u00EC\u008F\u00B0\x10\u00EA\rs\u00E0\u0097\u008A\x17\u00BD\u00FE;\u00F9\x04\u00EE\x16\u00D4\x7F:q\u00E2AQ\u00BE\u00B1\u00E8\u0083\u008B\u00A0\u00FC\u00F3\u00D8\x03\x17E\u00AF\u0087\u00CB'p\x00\u0084\u00D1\u00E0\u00F0\u00E9\u00CC\u0086(*\x06\x7F\u00E3\u00F1\u00FD\x12\u0098\u00A2\u009B\x05\u00E9\u00B1\u00A1\x7F\u00C0\x7FU_Tu\u009B2JV\u00AF;\x00\x00\x00\x00IEND\u00AEB`\u0082";
		var tg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1E\x00\x00\x00\x1E\b\x06\x00\x00\x00;0\u00AE\u00A2\x00\x00\x00\tpHYs\x00\x00\x0B\x12\x00\x00\x0B\x12\x01\u00D2\u00DD~\u00FC\x00\x00\x00\u0094IDATH\u00C7c\u00FC\u00FF\u00FF?\u00C3@\x00&\u0086\x01\x02\u00A3\x16\x0F\x7F\u008BY0D\u00BE/U```P\u00A0\u0092\u00F9\x0F\x188\u00A3\x1F\x10g1\x03C\u00C2\u00F7\u00C7\\\u00F5\u00DF\x1EqSd#\u0097\u00DCW\x06N\u00D9o\u008D\f\f\f\r\u00C4Z\u00CC\u00F0x\u00A9\x02\u00C3\u00CD\x0Em\u008A,V\u00AF\u00B8\u00CA\u00A0Vqm4q\r\u00C6T\u00CD\u00C0\u00C0 \x1B\u00FD\u0080A\u00D8\u00F65\u00C5\u0089\u008BT\u008B\x17p\u00CA~;\u00C0)\u00FB\u008D:\u00D9\t\x07`\x1C\u00AD\u009DF\u008B\u00CC\u00D1\"s4U\u008F\x16\u0099\u00A3E\u00E6\u00A8\u00C5\x03n1\x00\u008C\x0F=\u008Dd\n|\u00E5\x00\x00\x00\x00IEND\u00AEB`\u0082";
		var de = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1E\x00\x00\x00\x1E\b\x06\x00\x00\x00;0\u00AE\u00A2\x00\x00\x00\tpHYs\x00\x00\x0B\x12\x00\x00\x0B\x12\x01\u00D2\u00DD~\u00FC\x00\x00\x02\tIDATH\u00C7\u00ED\u00971k\u00DB@\x14\u00C7\u00FF\u00F2\t\u0099`\u00EA\u00D8\u0099<\u00A4\u00905`\u0083!ti\u00A6l\x19\u00DD%\x18eQ\u00D7|\x02\u00FB\x1B\u00F8\x13tm\x06Y\x11\u00CA\u00D0\x12(d\u008B\u0097L\x1Db\u00B0!d\x0B$\x01\u0087\u0080\u00ED\x04,#\u00E5\u008E\u00D7!5\u008D\x1DI'\u00B9\u00A5\x0E\u00A5\x07\u00B7\u00FD\u00EF\u00FDx\u00EF\u00DE{\u00F7N!\",b\u00A5\u00B0\u00A0\u00F5J\u00C1\u00E3f\u00C5\u00BF9\u00AC'1\u00E8\u00DF\x1C\u00D61nVd:%\u00F4\u008E\u00C7M\x03\u00C0g>R\u0085\u00C2\u00C8a\u00F9\u00AA.3&\x06\u00B6EB\u00D9Q3\u009C\x01\u00F8\u0088\u00A5\u00DD\u00FDP1\x11\u00BD\u00DC\u00AEi\u0090k\u00D2\u0099qA\u00AD\u008D[z\u00BC\u00B39\u00EF\x1FX\u0081\u00DA\u009F\u009B\u00F7\x0F\u00AC\u00C7;\u009B\u00B76n\u00E9\u00CC\u00B8 rM\"\u00D74\u00C2\u00F4\u0091\u00D0#\u00CD\u00A3#\u00CD\u0093\u00C2\u009FC'gd\u00F0\u00E9P?\u00DD\u00CD\u0097\u00F6\u00DE;\\YkS\u0091\u00C9\u0096\u0086\u00D8<>y\x11\u00F6IxO\u00B7\u00B7\u00D8C'7u\u00E6\u00AD~\u0089\u00F2\u00A7\u00EF\x00\u00F0\x01K\u00BB_C\u0093\u00CB\u00EFk\u00EB|\u00A4\u008A\u00FB\x19\x03\x00\u00F0\u00D0\u00C9\u00E1t{\u008B\u0091Pv\u00C4\u00C0\u00B6dP\x00\u00B8\u00EF\u00E4\u00C0G\u00AA\u00F0\u00FB\u00DA\u00BA4\u00B9d\u00C6&\u009E\u00B3\u00B4\u00E8\t\u008F\x15d\u00BA\u00B0\u00C4\f\u00CC\u00EA8\u00F0b\u00A3\u008Dn\u00AD\u008Cy\u00A0\u0091\u00E5$\u0083\u0087\u00AD8\u00D0\u00C8\x06\u00C2\u00F2U]a\u00E4l\x1E\u009F\u0088li\u00F8G\u00A1\u00D2\u00CE\u0095\x04\u009E\x04\x1A\u00ABW\u00B3|Ugi\u00D1+6\u00DA\u0091\u00BAb\u00A3\r\u0096\x16\u00BD8\u00D0X`1\u00B0-\u00E1\u00B1B\u00B7V\u008E\u00D4uke\b\u008F\x15&\u00A5\u00F6[\u00E0$\t\x16T\u00E7s\u0081\u00E7\u00C9\u00EA$\u00F0\u00D4<\u00D0li\u0088\u00F7\u00DFZ\bJ\u00B8\u00B8\u00F0\u0085u\u00AE\u00D4\u00EC#\x1E\x07\u00AA0r\u00947\u00FAjT\u00A9=\u00F7<h\u0098\u0098\x02k+\u00FE\u00B9\u009A\u00E1l9\u00C0P\u0090\x07\u00B2:_.\r\u00A1f8\u00D3V\u00FCs\u00F9 \u00F0\u0097\u00DE\u00E3\u0085M \u00AFl\u00E6\u00FA\u00E5y\u00C5\u00BBv\u00EA\u0091\u009A\u0099\u00ED];ur\u00CD\u008AL\u00A7\u00FC\u00FFI\u00FC\u00F3\u00E0\x1FY\u00B75\u00F3KvJ\u0094\x00\x00\x00\x00IEND\u00AEB`\u0082";
		var be = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1E\x00\x00\x00\x1E\b\x06\x00\x00\x00;0\u00AE\u00A2\x00\x00\x00\tpHYs\x00\x00\x0B\x12\x00\x00\x0B\x12\x01\u00D2\u00DD~\u00FC\x00\x00\x035IDATH\u00C7\u00C5\u0097]hSg\x18\u00C7\x7F\u00EFI\u00CEINk\u0097h'k#1\u00F5\u00C2+Y\u00C9.\x06c\u00DET/6z#\u00A5\u00F4b\x10/\u00CA\x10\u00B7u\u0082z\u00A7\u0083]\u00EDZd\x1F\u00A4\x13&t\u00B6\x11&\u0083A'~\u00ED\u00C2L+(\x0EI\x03\u00E2\u00CDt\u00AEn5\x15\u009B\u00A4\x14{\u0092\u0093\u008Fg\x17Q\u00E8W\u009As\u00D2\u00C8\x1E8W\u00E7}\u00CF\u00EF<\u00FF\u00E7\u00FF\u00BC\x1FJDhYX\u0089> \u008F\x19K5\x1A\u00AA\u00D1\u00CA\u00D0\u00FE\x1AFe\u0087\x1D\rm)X\u00DE\u00DC\x0F\u00FA\u00E0\u00E6\u00C1V\u00A2\u00C7\u0095\u00CC\u00A2\u0087\x10\u00A3\u00FB\u00A5\u00E4M\u0082\u00ADD\x1F*{\u00C5ym\u00ED\u00AB\x18\u00E7<\x18?z\u00C1\u00BE\u00DA\b\u00BEQ\u00C6=\u00E0\u00EBj\f\u00FD\u00E1O\u00E0:\u00FA\x05\x03\u00CF\r\u00F0\u00DC\x00\u00FD\u0082\x01\\\u00A7\u00F0}\u00CA=XeO \u00ED\u0081\u00C6\u00B2\u0099\u0087P\u00B9[\u0094\u00FB\u00AB\u00C8v\u00A8F\u00A04TE\u00E5n!\x1Du\u008D\u00A6\u00D6m\u00A7B|\x04\u00F1}\u008B\u00F7w\u008D\u00CA{\u00B3H`\x0Ff,\u00BF!\u00BF\u00F0\u00DD$\u00EAY\x7F\u00CDd]\u00E3\u00F8G>\u00DEh\u00F8J\u00B0\u0095\u0088\u00A2\u00B2\u00C3H\u00DB\x11|_y\u00D0\u00FE\x06\u00FB\x13\u00A8\u00F6\u00CE\"\u0081\u00CF\u0081d\u00DD\x1F\u00B0\x12A(ePv\x01\u00FF\u00E1\u00A0KsU\u00A6\u0090mG1\u00CE\u00D5\u00A0\x00\u00FA8\u00A8\u0085\x10\u00F0\x0BP\u00BFG\u00CDX\x1E\u00B5t\x1E\u008AcN\u00FC\u00B8V\u00EAB|\x041Oc\u008C\x19h\x7F\u0080\u00FDe\x05\u00D9r\x1B\u00D9z\x103\u00F6xE\u0086j1]\u0093\u00B6\u00A3\u00B7a)\x1C\u00D5\u00D8J\u00F4A\u00F17\u00BCI/\u0095\u00F7\u00A7\u00F1\x7F\x1A]#\u00ABZL\u00A3\u00A5\u00C2\x00T\u00A3O\u00DC\u00C2\u00B5:\u00B2%Q\u00F37)\x7F\b\u00D21\u00B0\n\x1A)\u00E5\u00F4\u00E7\u00A5\u00DC\u00960\u00FA8\x18g@K\u0085Q\u008B\u00E9Z\u009D7\x03\x06\u0090\u00D07`=\\%o\u00A4\u0094\u00D3\x1Ff\u00AE\u00EC\u00F0d.\u00EF\u00A2\u00949\x05\u00D2\u00D6\x1C\\D\u009C=K\x13\x11\u00FB\u00DF\u009F\u00CA3g\u00A7d\u00D2(\u00CA\u00A4Q\u0094\u0099\u00B3Sb\u00CF\u008E\u008AT\u00DBD*\x11\u0091\u00A5\t\u0091\u00A5\u0089a'\u00DFS\u008E\u00B6\u00C5e\u0099\u00A6>{w\u00C5\u00AB\u00E8\u00E8]\u00BA\u00FA\x1F\u00A0\x07\u0095\u00A0\u00AC\u008B\u00F8\u008F\x1Ch\u00CD\u00EE\u00B4\x01\x14\u00E0Q|7z\u00D0\x04%\u00D3k\u00A0V\u00E2\u0098;W;\u0084\u00BE\u00F1v\u009E\u00BD\u0097\u0092TK\u00D59c\u00C7G]\u00EB\u00CC\x17`\u00EBzn\u00D7^#\u00F4\u00D5\x1A?\u00E0\u00A6\u008F7\x0B\u00AD\u00F5\u00B9\u00CA\u0085\u0091\u00CE\x05\u00A4\u00BDgu\u00D6\u00DAz\u00936\t=\u0086Z\u00B8\u008F\u00CA\u0087\u00F0}\x01\u00DA\u00BD\x00\u00EA\u00C5c\ngN\u00D6\x07[\u0089\u00A0=\u00EFK7\r\x05P\u00B9!$\x10\u00C2{\u00D9\x03\u0080\u00E7\x01H{\x00\u00D4\u00E1\u00E5=\u00BEBj\u00FB\u009F\u009Fg\u00E6\u00AEu\u0087\u009B\u0086.\u00DF\u00E5\u00B0\u00EF\u00E0\u00BDhP\x1E\x04\u00D8\u0087\x19K\u00BA>\u00EC\u00B9\u0082\u00D6\u0096\u00DC\x14\u00CA:Ny\x10T\u00F6\u00EB\u00D5\u00D05`\u00A3\u00B3\u00D8\u00FB\u00D6\x07O\u009FDG\u00EF6\x0F}\x15\u00FE\u00918T^ \u00DB\u00C6\u009C\u00B9\u00FAe\u009D\u00E7\u00AEu\u0087\x1F\u00C5w\u00B3\u00F7RR*\x05m\u00DA\u00B7s\u00E8\u009DV\u009E\u0084\u00EB\u00B5S\u00D0\u009E\u00F7\u00A5\u008D\u00CEb\u00B8\u00901\x7F\u00F5\u00EF\x1A<@\u008B\u00A3\u00FE\u00CAUs\u00E0\x00fl\u008C\u00D7\x10\u00AA\u00A5w'7\u00B7\x1D\u00FE\u00A7\u00F8\x0F\x04d\x04>\u00AF\u00AB\u0094~\x00\x00\x00\x00IEND\u00AEB`\u0082";
		var xi = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1E\x00\x00\x00\x1E\b\x06\x00\x00\x00;0\u00AE\u00A2\x00\x00\x00\tpHYs\x00\x00\x0B\x12\x00\x00\x0B\x12\x01\u00D2\u00DD~\u00FC\x00\x00\x02\u00ACIDATH\u00C7\u00ED\u0096[H\x14q\x14\u0087\u00BF\u00D9\u00D9\u00B9l\u0096\u00BBi\u00D2v\u00B5\u00B2@\x13a\x11B\u00E8\u0086\x06\x15F\x04YP\u00B9\x10\u00F5\x14\u00DD\x1E\u008A\u00C4$\u0088^\n\tI\u009F\u00EAU\u00AA\r\u00F1\u00F6\u00D4\u00C5\u0097T2D\x13J\x14\u00A2\u00A0h\u00CD\u00C4D\\\u00D6-\u0099\u009D\u00BD\u00CC\u00F4\u00A0\u0085\u00E5\u00E6FN\u00D9C\u00E7q~3\u00F3\u00CD\u0099\u00F3;\u00E7\x7F\x04\u00D34\u0099\u008F\u00B01O\u00F1\x1F\u00FC\u00D7\u00C2n\u00C9[\u00F4\u008B\u0087\u00C1y\x053\u00DD\u008D0x\x17#\u00BB\n\u0087\u00D7?\u00DB#\u00C2\u009C]\x1D\u00BE\u00DE\b\u00CA\x01\u00A4f`\x02\u00E2\u00DB\u00C1X6\u0084Z\u00B6\u00D2Z\u00B0\u00E6\u00F3\u0080\u00D6\b\u00B2\x1B\u00E1s=\u00A6\u00C3\u008BZ.#\u008CN\u00FB\u0098\x1A\x10\u0086\u008F\u00A0T\u00D6YSc\u00CD\u00E7\u0082h\x17RS\x16\u00EA\u0085\x14\u0084\u00D0Q\u00C4\u0097\u00C2wP\x00\u00F1\t\u0098i\x07\u00AD\u00AC\u00F11lo>aoQ\x00P*D@\u009Cq\u0097\u0091\x03\u0082\u00D9e\u00A5\u00AB\u00DB1W,\u00C4\u00C8L\u00AC\u009A\x0B r\x02\u008C\u00F5:Jy\u0095\u0095`\u00BF\x19\u0093%\u00C2\u0097I\b\u00D7\u00AF\u0081\u0091\u00EF\x07\u00C9m]\x1Fk>WdL\u00E9\u00FBP\u009F-\u00F6\u0097\u00E5\u0083~u\u00D2\u00C1\u00D3C\u00AE\x06SZ\x01x,\u00EB\u00E3\u00F0G\u00C7\u00EDH@^\u00DE{r\x13\x00\u0081\u00EE\u00E5lk\u008Dasd\u0082tg*\u008D\x01\u00B0?\x0E\x10+.\x04\u00DA\u00E7\u009Cq\u00F8msM$ \u00EF\u00E9,.\u00FAf\u00A4P\u00BF\u008B\u008E\x1D\u00C5h\x03;!rn\u00B2\u00BEf\x06\u00C4\u008A\u0096$\u0083\u00FER\u00C6\u00BA\u00BF\u00E9\u0094\u00DD\x19;\u00D3}h\u00AB\x18\x1D\u0097\u00BE\u00D3B\u00FD.\u0086\x1Ar\u00C8:\u00ABG\x05\u00A3Z\u00C3\u0094\x15\u0084\u00D1Z\u00D4\u00B2\u00A4\u00E0\u00D9\x07\u0088\u00E6\u00F3\x00/:\u00F7\x162\u00F64c\u0086\u00BC\u00AA\u00D4O\u00DE\u008D\u00E7\x11Q\u008D\x17L]\n&\x1B\u0095\u00C93\u00D6|k\u008C\u00B0\u00D8\u00D5w>?!45/\u0088\u00E7f\x0F\u00C0n\x1C\u00DE^\u00CBN'}D\u00BD\u00EF\u00AF]\u00A7\f\u00DE[3C[\u00B0z\u0082--mq}D=\u008D\u00C3\u00DB\u00FE;#>\u00F1\u00AF\u009E\u00CC\u00F6\u00D5\x03w\u0089\u00F2\u00A3$9\u00A3l~\u00D4\x16\u0097\u00D3\"\x0F\u00D5\u00B5%\u00FB\u00AC>\x16]65\u00AE$\x12<\u00B7\u009E\u00A1.\rw\u00C8+\x0F\u00FE6\u00F4\u00A7\u00E0hHj}wsC\x02h\x0Fi\x05c\u0083r\u00BA\u00BE\u00DF\u00FAE@\u00F3\x15\x1AaU{]\u0099\u00BB\u00F8k=W\u0095\u00FAY\u00B41\x14X\u00BAk8\u00C5\u00A6\u00C6\u00B7\u00E3\u00F0\x06\u00FF\u00C4\x06\u00D2+\u00A7\u00E9\u00CE\u00D4\u00BC \u00DA\u00FB\x14r+{\u00C9(\x1A\u00E9\x16\x1D\u00F1:\u00A0\u00D6\n\u00E8O\u00CD\x15\x19j\u00A8\u0090R\u00A3\u0097\x00\u00A2\u00E3r\u008F\u009C\u00AE\x1F\u00FF\u00D5\u00FE\u009C\u009B\u00AB\u00BF\x1D\u00FA\u00B8\u00AC\x06Z\u00B7s\u00FD\u00DF\u00AB\u00FFu\u00F0\x17\u00A0\x1A\x00\u0090\u00C7j\u00CE\u00B9\x00\x00\x00\x00IEND\u00AEB`\u0082";
		var cl = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x00\tpHYs\x00\x00\x0B\x12\x00\x00\x0B\x12\x01\u00D2\u00DD~\u00FC\x00\x00\x01\u00DBIDAT8\u00CB\u00E5U\u00BB\u008E\u00D3@\x14=\u00E3Lb;!\x0F\u0082\u00A5\u00C4\u00DA\x14a\x0B\u00FE\x02\t\u00AD\u0095\x04\u00B6\u00A2\u00A4\u00E0\x03(i@\u00A2\u0082\x06\u0089\u0092\u0096\u008E_\u00D8b\x11\u00CDHH\x14\u00B4\u00DBl\u00B1\u00C5\u0086H\u00EBP\u00C4&\u00B2\x17\u0099\u00F89\u0097\u0082l\u00E4d\x13m\u0090\u00D2q\u009B\u00AB9w\u00E6\u00E8\u00DCy\u009CaD\u0084]\x06_\x07\u00F6z\u00BDwD\u00F4\u009C\u0088\u00D4<^(\x14N\u00B3,{*\u00848\u00D9D\u00C8V\x15\u00F6\u00FB\u00FDWD\u00F4\u00D64\u00DBL\u00D7\u00F5\x05.\u00A5\u0084\u00E3\u00B8\b\u0082\u00C0\u0097Rv\u0085\x10\u00DEV\n\u0089\u00E8\u0085i\u00B6\u0099\u00A2(8?\x1F&DT\x04\u0080j\u00F5V\u00DCj\u00B5J\u00B6=\u00AE\u0084a\u00F8\x18\u00C0\u00C7\u008D\u0084\u0096eu\x01t\u00E7\u00D8m]\u00D7\u00AF\u00C8^\x028\x01\u0080 \u00F8\u00FD\u00C1\u00F3\u00FC{\u00E5\u00B2\u00CE\u00C30|`Y\u00D6\b\u00C0H\b1Zj\u00F9\u00F0\u00F0\u00D1\u00FD$I?s\u00CEc\x00`\u008Ci\u009D\u00CE\u009Ef\u00DB\u00E3\u0090\u0088\u00C2\u00FC\u00E4z\u00BD\u00DE\x00\x00\u00DF\u00F7=\x00H\u00D3\u00B4T,\u00F2\u0087\u00C7\u00C7\u009F\u00BE.\x14\u00C6qrd\x18F\u00B9V\u00AB\u0096\u00F3\u008B;\u009D=\r\u0080\u00B6\u00AE\u00ADZ\u00AD\u00DA\x00\u0080\u00CB\u00CB_p]\u00F7\b@sA(\u00A5<p\x1C\u00E7\u00DBd2\u00D1\u00FE\u00F5\u008A0\u00C6B\":X{\u00CA\u0096e\u00BD\u00A9T*\u00AFM\u00B3}#Q\x14E\u00B8\u00B8\u00B0!\u0084`\u00AB5%?P\u00D5\u00D2V\u00CATU\u00DDXSV\u0081\u00F1\u00F8\x07f\u00B3\x19\x00`8\u00FC\x0E\x00\u00F0<\x1F\u00D3\u00E9\u00F4Z}+\u00C2|H)\u00E79\u00DBz_\x15\u00EC8\u00FEw\u00C2(\u008A\u0097\u008B\u008A2\u00CF\u0085%<I\u0092\u00AD\b\u00BF\x04A\x00\u00CE9\u00AElk\x7F\u00FF.\x00\u00A0\u00D1\u00A8\u00A3\u00D9\u00FC\u00FB\u00BA\f\u00E3\x0E\\\u00F7'8\u00E7g7\u00FA\u00E1`0x\u009Fe\u00D9\u00B3Uc\u00BDfQ\u009C\u009F\u00A5i\u00FAd\u009D\u00D1\u00B2]\x7F\x01\x7F\x00\x1B|\u00CF\u0084\u0082\u00F8\u00BD0\x00\x00\x00\x00IEND\u00AEB`\u0082";
		var he = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x00\tpHYs\x00\x00\x0B\x12\x00\x00\x0B\x12\x01\u00D2\u00DD~\u00FC\x00\x00\x00\u00E8IDAT8\u00CB\u00CD\u0094M\r\x021\x14\u0084\u00BF%\u00DC\u00C1\x01+a% \x01\x14\u00C0s\u00B0\x12\u00C0\x01\x0Efq\x00\x0E@\x01\u00E0\x00\t\u00A0`\u00B9\u00F4\u00F0hvi\u00F99\u00D0\u00A4\u00C9k\u009B|\u009D\u00CE\u00B4-\u00DA\u00B6\u00E5\u0097m\u00D8\u00B7`fc`\nTa\u00EA,i\u0097\x02\x16]\n\u00CDl\tl\u0080Q\u00B4t\x07jIM60\u00C0\u0094\x102\u00EFS;\u0088`e\x04\u00DB\x03\x16\u00FA\u00D1\u00CDor=\u009C\u00B9z-i\u00E56\u00DB\x01\u00D7`\u00C3\u00A4\x0F8\u0088\u00C6\u0095\u00AB\u009F|\u0092t\u00CBI9\x06\u0096\x0Ep\u008D\u00ECh\\H\u00C7\u00DC#\u00D7\u00C0\u00B8#\u00F5\x06X\u00F8\u00A4\u00DF\u00BA6\t\u00D8T\u00D2\u00F9#\u00A0\u0099U\u00C0)\x17\u00D6\u00E5!\u00AFBJ\u00C1r\u0080\u00A5\u00AB\u00B3R.~\u00FD9\u00A4\x14bfUx\u008E\u00DF\x03C(\x07@\u00B9\u00D0\u0094\u00C2\u00A5\u00BB\u00CC\u00F5\u00D7@I5\u00B0\x05.\u00E1o\u00FC\u00C3P\u00DEm\x0F\u00B5\u009AYN<\u00E7\u00FD\u00BC\x00\x00\x00\x00IEND\u00AEB`\u0082";


		var pal = (thisObj instanceof Panel) ? thisObj : new Window("palette", qe_str.title + qe_str.version, undefined, {
			resizeable: true
		});

		if (pal !== null) {
			var res = "group{orientation:'row',alignment:['fill','fill'],\
						leftPart:Group{orientation:'column',alignment:['fill','fill'],\
								txtArea:EditText{text:'',properties:{'multiline':true},alignment:['fill','fill'],minimumSize:[0,0]},\
								buttonGrop:Group{orientation:'row',alignment:['fill','bottom'],\
										export:IconButton{size:[30,30],alignment:['left','bottom'],properties:{style:'toolbutton'}},\
										import:IconButton{size:[30,30],alignment:['left','bottom'],properties:{style:'toolbutton'}},\
										toggle:IconButton{size:[30,30],alignment:['left','bottom'],properties:{style:'toolbutton'}},\
										delete:IconButton{size:[30,30],alignment:['left','bottom'],properties:{style:'toolbutton'}},\
										beauty:IconButton{size:[30,30],alignment:['right','bottom'],properties:{style:'toolbutton'}}}},\
						rightPart:Group{orientation:'column',alignment:['right','fill'],\
								buttonGrop:Group{orientation:'row',alignment:['fill','fill'],\
										clean:IconButton{size:[20,20],alignment:['left','top'],properties:{style:'toolbutton'}},\
										help:IconButton{size:[20,20],alignment:['right','top'],properties:{style:'toolbutton'}}},\
								circleGroup:Group{orientation:'column',alignment:['right','fill'],\
										cirUp:RadioButton{text:'" + qe_str.absolute + "',value:true,alignment:['left','top']},\
										cirDn:RadioButton{text:'" + qe_str.relative + "',alignment:['left','bottom']},},\
								pick:Group{alignment:['fill','fill'],\
										pickB:IconButton{size:[30,30],alignment:['fill','bottom'],properties:{style:'toolbutton'}}}}}";

			var qe_help = function () {
				var res = "group {orientation:'column', alignment:['fill','fill'], alignChildren:['fill','fill'],\
							logoG:Group{orientation:'stack',\
								egg: Group{alignment:['fill','fill'],margins:[190,0,0,3],\
									text:StaticText {text:'MAKE THINGS BETTER!\\nsss',alignment:['center','center']}}\
								egg2: Group{alignment:['fill','fill'],margins:[0,0,0,3],\
									text:StaticText {text:'KEEP CREATING AND',alignment:['left','center']}}\
								imageG:Group{orientation:'row',alignment:['fill','fill'],\
									logo: Image {alignment:['center','fill'],size:[80, 80]}},\
							},\
							pnl: Panel { type:'tabbedpanel', \
								aboutTab: Panel { type:'tab', text:'" + qe_str.descript + "',\
									aboutEt: EditText { text:'" + qe_str.desContent() + "', \
										preferredSize:[250,100], \
										properties:{multiline:true} } },\
								usageTab: Panel { type:'tab', text:'" + qe_str.usage + "',\
										usageEt: EditText { text:'" + qe_str.useContent + "', preferredSize:[250,100], properties:{multiline:true} }}},\
							btns: Group {orientation:'row', alignment:['fill','bottom'],\
								otherScriptsBtn: Button { text:'" + qe_str.other + "', alignment:['left','center'] },\
								okBtn: Button { text:'" + qe_str.close + "', alignment:['right','center']}}}";
				var helpWin = new Window("palette", qe_str.about);
				helpWin.gr = helpWin.add(res);
				helpWin.gr.btns.otherScriptsBtn.onClick = function () {
					var cmd = "";
					var url = qe_str.website;
					if ($.os.indexOf("Win") != -1) {
						if (File("C:/Program Files (x86)/Google/Chrome/Application/chrome.exe").exists) {
							cmd += "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe " + url;
						} else if (File("C:/Program Files (x86)/Mozilla Firefox/firefox.exe").exists) {
							cmd += "C:/Program Files (x86)/Mozilla Firefox/firefox.exe " + url;
						} else {
							cmd += "C:/Program Files/Internet Explorer/iexplore.exe " + url;
						}
					} else {
						cmd += "open " + url;
					}
					try {
						system.callSystem(cmd);
					} catch (e) {
						alert(e);
					}
				};
				helpWin.gr.btns.okBtn.onClick = function () {
					helpWin.close();
				};
				helpWin.gr.logoG.egg.text.graphics.foregroundColor = pal.graphics.newPen(pal.graphics.BrushType.SOLID_COLOR, bgPink, 1);
				helpWin.gr.logoG.egg2.text.graphics.foregroundColor = pal.graphics.newPen(pal.graphics.BrushType.SOLID_COLOR, bgYellow, 1);
				helpWin.gr.logoG.egg.text.visible = !1;
				helpWin.gr.logoG.egg2.text.visible = !1;
				var loa = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00P\x00\x00\x00P\b\x03\x00\x00\x00\u00B9\u00CF\x02\u009F\x00\x00\x01\u00FEPLTELiq\u00B4\x00\u00FF\u00B4\x00\u00FF\u00B4\x00\u00FF\u00FF\u00FF\x00\u00B4\x00\u00FF\u00B4\x00\u00FF\u00FF\u00FF\x00\u00B4\x00\u00FF\u00FF\u00FF\x00\u00B4\x00\u00FF\u00FF\u00FF\x00\u00F4\u00DB$\u00FF\u00FF\x00\u00FF\u00FF\x00\u00B4\x00\u00FF\u00FF\u00FF\x00\u00B4\x00\u00FF\u00B4\x00\u00FF\u00B4\x00\u00FF\u00B4\x00\u00FF\u00B4\x00\u00FF\u00FF\u00FF\x00\u00FF\u00FF\x00\u00B4\x00\u00FF\u00B4\x00\u00FF\u00FF\u00FF\x00\u00FF\u00FF\x00\u00FF\u00FF\x00\u00FF\u00FF\x00\u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u00FE\u00FA\x05\u00B3\x00\u00FE\u00D4n\u0091\u0093k9\u00B3\x00\u00FD\u00B1\x00\u00FB\u00CE\u00C6\f\u00B8\u009F#\u00B0\x00\u00F9\x00\x00\x00\u00A4\x00\u00E8555\u00AB\x00\u00F2s\x00\u00A3\u008F\x00\u00CB\u0081\x00\u00B6   \u00FF\u00FF\x00\x00\x00\x00\x00\x00\x00\u00A9\x00\u00F0\u00A9\x00\u00F0\u0097\x00\u00D6\u00A8\u0089,\u00A9\x00\u00EF\u00B3\x00\u00FE\u0098\x00\u00D8\u00A3\x05\u00E0\u00D8\u00D3\x07?\x00Y\u00A4\x00\u00E8\u0088\x00\u00C1\u0096\x00\u00D49\x00Q\u00B1\x00\u00FA\x00\x00\x00\u00B0\x00\u00F9\u00B2\u008F2\u00DD\u00D8\x07\u00D2\u00C5\x11\u00FF\u00FF\x00\u00B4\x00\u00FF\u00B3\x00\u00FE\u00C7@\u00BF\u00B3\x00\u00FD\u00B1\x00\u00FB\u00AE\x00\u00F6\u00AF\x00\u00F8\u00AC\x00\u00F4\u00B0\x00\u00FA\u00AA\x00\u00F1\u0091\x00\u00CD\u00B2\x00\u00FC\u00A6\x00\u00EB\u00A0\x00\u00E3\u008D\x00\u00C8\u00B0\x00\u00F9\u00A3\x00\u00E7y\x00\u00AB\u00F7\u00F7\x00k\x00\u0097~\x00\u00B2\u00A8\x00\u00EE\u0098\x00\u00D7\u00A2\x00\u00E6\u0099\x00\u00D8\u0088\x00\u00C0~\x00\u00B3\u00A5\x00\u00EA\u0099\x00\u00D9\u00A9\x00\u00EF\u009D\x00\u00DF\u00AC\x00\u00F3\u00A8\x00\u00ED\u00A0\x00\u00E2\u00B4\x00\u00FE\u0082\x00\u00B8w)oo\x00\u009D\u0090\x00\u00CC\u009C\x00\u00DD\u0087\x00\u00BF\u00E1\u00E1\x00s\x00\u00A3\u0094\x00\u00D2t\x0F\u008E\u0095\x00\u00D3\u00AB?\u009A\u00B0<\u00A4\u0083\x00\u00BA\u00B3\x0F\u00E8\u00910\u0088p\x00\u009Et\x00\u00A5\u008C\x00\u00C6\u008B\x00\u00C5\u009D\x00\u00DEp\x00\u009F\u00E6\u00E6\x00\u00A4\x00\u00E9\u009E\x00\u00E0\u0085\x00\u00BC\u00B4*\u00C3\u008CMX\u008C\x00\u00C7\u00A9F\u008C\u0083\x00\u00B9{\x00\u00AEz\x0B\u009D\u00E9\u00E9\x00\u0097\x00\u00D5\u008F\x00\u00CA\u009DA\u0083y\x00\u00AC\u0092\x00\u00CF|\x00\u00B0\u008D2\u0081\u00F8\u00F8\x00\u0084\x00\u00BB\u00B6T\u008B\u00B0Zz\u00B4\x10\u00E8\u009FlI\u009B\x00\u00DC\u0096\x00\u00D4\u0094\x00\u00D1\u008A\x00\u00C4w\x00\u00A9\u0084 \u008D\u0085\x00\u00BD\u00C3g\u0081\u0080\x19\u0092\u009F\x00\u00E1\u0081\x00\u00B7|\x00\u00AF\u00AE\x00\u00F7\u00F0\u00B2\x1A\u0091\x00\x00\x00JtRNS\x00\u00F0`0\u00C0\x10\u00A0\u0080\u0080@\u00D0\u00F0\u00E0P \u00E0\x10Pp@ \u0090\u00D0p\u00B0\u00C0\u00E0\u00B00\u00A0`\x04\x03\f\u00C4\u00F0\u0094\u00FC\u00E0A\u00F6\u00F5Q\x01\u00F1\x01\u00A3\u00F5]\u00B3\x01\u0090\x0B\x07\u00E2\x11{\u00F9\u00B3\u00D0{\u0098\u00FA(f\u00E7\u00AB,1\x02\u00F0\u00F8\u00F6\u00F5\x1C\u00A7\x07\u00E3\x00\x00\x00\tpHYs\x00\x00\x01\n\x00\x00\x01\n\x01\x16\u00A4\u00BC\u00CB\x00\x00\x03mIDATX\t\u00ED\u0098\u00E7S\"A\x10\u00C5\x1B\x11\x059eU\x04\x15L\u0097s\u00CE9\u0087]O\u0090\x03\u00C3\u0099s\u00BA\u009Cs\u00CE9\u00E7\u009C\u00EF\u00BF\u00BC\x02J\u0098\u00EE\u00ED\u0099\u00F5\u00AA\u00A8\u00BB/\u00BCO\u0096\u00CD\u00BE\u00EAy\u00BF\u00DD\u0099\u00DE\u0085\u00AC\u00B2\u00CA\u00EA\x7F\u00CB\u0095o\u0096\x06NQ\u00A5\u00B4E\u0087\x13\u00ABX,\x06t\u00B3\u00FCPn\b*\u00A0\u0086y\x06\u0092\u00CD.\x16+\x19C\x1F\x14\u00A3+\u00EC\u00D8/\x07\u00FB\x199bQc\u00FCt=\b\x1E\u00F1\u008A<\u00E4g\u00B7a?\\u\u00B1\u0086U\u00E0Dkr\u0088\x01\x16`\u00BF\x02\x072\u00CCg\r\u00DD\u009AW\u00BA(e\u0080\x00\u00B9\u00AC\u00A1^\r\x15\x12,\u00CA\x00\x01\u00C0\u00CD\x1B\u00FA\u00C8\u0085\u00A96\u00D4\x01\x02\x14\u00F1~\u00BA^\x046\u00EE:\u008B\x00\x01\ne\u0086K\u00A0\f%5\u00B1\x00eL\u00E2X\u0080\u00C3b\x15\u00A0\u0094I\x02\x0BZ]\u00C5D\x02\u00A4Lr\u00C5\u0087\u00DAE\u00DA\u00F1\x02\u00AC\u0098\u00BE_\x1D e\u00E2\u00C7E\x07\u00EA\u00A7\f`\u00F5\u009Ezu\u0080\u0094\u0089\u008BT\x11\x01\x1B\u00AC\u00BD\x1EnP\x07H\u0099\u00D0\u00AA\x1D-p\u00DD\u009D\x1B\u00D1\u0090\u00D0\"\x13 a\u00E23\u0095\x11\u0096\u00BB\u00F7\x1E57\u00A6[d\x02\u00A4L\u00AAL\u00E5\x12\u00D1\u00F0\u00D6\u00D3\u00C7-\u00A3\u00A9\x16\u00B9\x00-\u0098\u00C4\u00B1\u00A05?\u00F9:4\u00B6w\u00DC\u0090\x0B\u00D0\u008A\t\u00C5\u00F2\u00FAW\u00AC7\u00D2T/\x0F\u00D0\u008A\t\x00\u0094\u008A\u0086o\u00BF\u00F4\u00BF\x1FN\u00B6\u00C8\x07h\u00C9\x04\x00o\u00DCo\x06>\u00B6%\u00EE\x1C>@\u00D3s\u00E2b4u\u00B7\u00A0o\u00DF?\u008DD\u00E377\x1F\u00A0b\u00EF\u0092i\u00C7\u00CF\x0F\u0083\u00BF\x1Bd\x01*\u00F6.\u0099v~n\u00FD1\x1AZ#\tP\u00B1w\u00C9\u00F4\u00F2\u00DD\u00AB\u00BE\u00B1\u00ED[e~\u008A\u00BDK\u00A6]\u00CF\u009F\u00B5m\u00DC&5\u0094\u009C'\n=|\u00D1\u00BA\u00B9\u00AEv^\u00A6\u0098\u00E8\u00FA\u00FA\x07\u009B\u00B6\u00D4\u00D5,\u00CE\x14\x13\u00FD\u00DA\u00ED\u00FB\u00B1\rKk3\u00C6\u00A4c\u00D5\u00D5\u009B=+\u0097\u00CD\u00C9\x18\u0093\u0099\u009D]\u00B1\u0096\u00E55\x19cr\u00EC`\u00FB\u00A5+\u00DD\u008D3d\u0086\x7F\u00CB\u00A4c\u00DA\u00F1\u00A3=\u0083\u00E1\x06\u00C9FC\u0099\u00F8r\u00CD\u009A<I\u00D4\u00ACC\x07N\u00F4FB\u0086!{P0\x13\u008D\u00F9\x05\u009A\u0097\u00CEtv\x1D\u00DE\x17\u008D\u00EF^%\x13aR\u00C9\u00FC\x00\u00CD\"\u00E7N\u00B6_>\u00D2\u009D8S<\x12C\u00C4$`\u00AE\u00E3\u00A9\u00F8\u00FC\u00C5\u00FE\u00BE\u00E6pS\u00E2o\u00D3\x10\u009F\x10f\u0092o\u00AA{\u00D11\x7F\u00FA\u00C2\u00D9Sm\u0091\u0090j\u00FF\u00B7:O\u00F0\u00DC\u00B6` \u00D6\x12M\r\x0E,\x16\x0B&(@\u00A3|Q\u00EB\u00C8p\u00FAPf\u00B1\u00A8\u0099\u00E0\x00=\u008E\u0085C\u00CD\u00E1\u00A6\u00D4\u00D8\u00C0bQ2\u00C1\x01\u00C6)\u00CC\u008D\u0088c\b\u0083E\u00C9\u0084\f\u00BEe\x000\x1FM^\f\x16%\x13<\u00F8z\u00E2\ff\u00A3\u00C1\u008B\u00C1\u0082\u0099\x14\n\x07\u00A8F\x07\u00DF\u00E4!<\x05\u00FD\u00CF\u008CE\u00BAw\x05\u00E8\u00E0\u00EBd\u00BBV3\x11yk$\u00C0\u00F1w\x1E\u00CC\u00DD\u0084E\u00BAw\x05I+\u00E9\u00A9\x03\u00F7M\u00B1\u00C8\u00CE\x13?\r0\x1D\x16yE!X$\u00E7I\u0080\u008C\u00C1\u00C9\u00B7\tv\u00CD\x04\x0B\u00CF\u00A4Rs\u00A0q\u00CB\u00B0y\u0085k\u00F0\u009A\t\x16\u0096\u0089;\u0088?\r\u00901\u008B\u00AC\x19a\u00E1\u0099T\u00E3\u00A1\u00DA0\u00CAQ\x13d\u00CD\b\x0B\u00CB\u00A4\u008A\x06h#\u00C1\u00E3*\u00C2\u00C21\u00F1\u00D1\x00\u008Db\u00ECG\u00F3\x10\u00B10L\u00DCA|(%\u00F7\x04$rG\u0089X\u00FC\u00E6\u008F?\u0085\u00E0%\u009FwL\x1B\x00\u00FD\u00FE#\x1D<\u00B3\u00CA*\u00AB\x7F \x00\u00F8\x03\u0080\u008B\be\u0087N.\u00DF\x00\x00\x00\x00IEND\u00AEB`\u0082";
				helpWin.gr.logoG.imageG.logo.image = ScriptUI.newImage(loa);
				var eggCount = 0;
				helpWin.gr.logoG.imageG.logo.addEventListener("mouseover", function () {

					eggCount += 1;
					helpWin.gr.logoG.egg.text.visible = eggCount % 2 == 0 ? !0 : !1;
					helpWin.gr.logoG.egg2.text.visible = eggCount % 2 == 0 ? !0 : !1;
				});

				helpWin.center();
				helpWin.show();
			};

			pal.grp = pal.add(res);
			pal.layout.layout(true);
			pal.grp.minimumSize = pal.grp.size;
			pal.layout.resize();
			pal.onResizing = pal.onResize = function () {
				this.layout.resize();
			};

			//button images

			pal.grp.leftPart.buttonGrop.import.image = ScriptUI.newImage(up);
			pal.grp.leftPart.buttonGrop.export.image = ScriptUI.newImage(dw);
			pal.grp.leftPart.buttonGrop.toggle.image = ScriptUI.newImage(tg);
			pal.grp.leftPart.buttonGrop.delete.image = ScriptUI.newImage(de);
			pal.grp.leftPart.buttonGrop.beauty.image = ScriptUI.newImage(be);
			pal.grp.rightPart.pick.pickB.image = ScriptUI.newImage(xi);
			pal.grp.rightPart.buttonGrop.clean.image = ScriptUI.newImage(cl);
			pal.grp.rightPart.buttonGrop.help.image = ScriptUI.newImage(he);
			pal.grp.rightPart.circleGroup.cirUp.enabled = false;
			pal.grp.rightPart.circleGroup.cirDn.enabled = false;

			//button function
			pal.grp.rightPart.buttonGrop.clean.onClick = function () {
				qe_cleanTxt(this.parent.parent.parent.parent);
			};
			pal.grp.leftPart.buttonGrop.import.onClick = function () {
				qe_importExp(this.parent.parent.parent.parent);
			};
			pal.grp.leftPart.buttonGrop.export.onClick = function () {
				qe_exportExp(this.parent.parent.parent.parent);
			};
			pal.grp.leftPart.buttonGrop.toggle.onClick = function () {
				qe_toggleExp(this.parent.parent.parent.parent);
			};
			pal.grp.leftPart.buttonGrop.delete.onClick = function () {
				qe_deleteExp(this.parent.parent.parent.parent);
			};
			pal.grp.leftPart.buttonGrop.beauty.onClick = function () {
				qe_beauty(this.parent.parent.parent.parent);
			};
			pal.grp.rightPart.pick.pickB.onClick = function () {
				qe_pickProp(this.parent.parent.parent.parent);
			};
			pal.grp.rightPart.circleGroup.cirUp.onClick = function () {
				qe_targetProp(this.parent.parent.parent.parent, targetProp);
			};
			pal.grp.rightPart.circleGroup.cirDn.onClick = function () {
				qe_targetProp(this.parent.parent.parent.parent, targetProp);
			};
			pal.grp.rightPart.buttonGrop.help.onClick = function () {
				qe_help();
			};

			//button help tips
			pal.grp.rightPart.pick.pickB.helpTip = qe_str.pickTip;
			pal.grp.rightPart.buttonGrop.clean.helpTip = qe_str.cleanTip;
			pal.grp.leftPart.buttonGrop.beauty.helpTip = qe_str.beautyTip;
			pal.grp.leftPart.buttonGrop.delete.helpTip = qe_str.deleteTip;
			pal.grp.leftPart.buttonGrop.toggle.helpTip = qe_str.toggleTip;
			pal.grp.leftPart.buttonGrop.export.helpTip = qe_str.exportTip;
			pal.grp.leftPart.buttonGrop.import.helpTip = qe_str.importTip;
		}
		return pal;
	}


	function qe_cleanTxt(pal) {
		pal.grp.leftPart.txtArea.text = "";
	}


	function qe_check2prop(comp) {
		var propCount = 0;
		for (var i = 0; i <= comp.selectedProperties.length; i++) {
			if (comp.selectedProperties[i] instanceof Property) {
				propCount++;
			}
		}
		return propCount > 1 ? true : false;
	}


	function qe_pickProp(pal) {
		comp = app.project.activeItem;
		if (qe_actItem(comp) && !qe_check2prop(comp)) {
			pal.grp.rightPart.circleGroup.cirUp.enabled = true;
			pal.grp.rightPart.circleGroup.cirDn.enabled = true;
			var deepProp = comp.selectedProperties[comp.selectedProperties.length - 1];
			targetProp = deepProp; //global
			var endExp = qe_quote(deepProp.matchName);
			while (deepProp.parentProperty instanceof PropertyGroup || deepProp.parentProperty instanceof MaskPropertyGroup) {
				if (deepProp.parentProperty.propertyDepth == 1) {
					endExp = qe_trans(deepProp.parentProperty.matchName, deepProp.parentProperty.name) + endExp;
				} else {
					endExp = qe_trans(deepProp.parentProperty.matchName, qe_quote(deepProp.parentProperty.name)) + endExp;
				}
				deepProp = deepProp.parentProperty;
			}
			pal.grp.leftPart.txtArea.text = pal.grp.rightPart.circleGroup.cirUp.value ? qe_clean2quote("comp(\"" + comp.name + "\")" + ".layer(\"" + deepProp.parentProperty.name + "\")." + endExp) : qe_clean2quote("thisLayer." + endExp);
			return targetProp;
		} else {
			alert(qe_str.errorOneProp);
		}
	}

	function qe_targetProp(pal, prop) {

		var endExp = qe_quote(prop.matchName);
		while (prop.parentProperty instanceof PropertyGroup || prop.parentProperty instanceof MaskPropertyGroup) {
			if (prop.parentProperty.propertyDepth == 1) {
				endExp = qe_trans(prop.parentProperty.matchName, prop.parentProperty.name) + endExp;
			} else {
				endExp = qe_trans(prop.parentProperty.matchName, qe_quote(prop.parentProperty.name)) + endExp;
			}
			prop = prop.parentProperty;
		}
		pal.grp.leftPart.txtArea.text = pal.grp.rightPart.circleGroup.cirUp.value ? qe_clean2quote("comp(\"" + comp.name + "\")" + ".layer(\"" + prop.parentProperty.name + "\")." + endExp) : qe_clean2quote("thisLayer." + endExp);

	}

	function qe_actItem(comp) {
		if (comp instanceof CompItem && comp.selectedProperties.length != 0) {
			return true;
		} else {
			return false;
		}
	}

	function qe_importExp(pal) {
		app.beginUndoGroup(qe_str.title);
		var comp = app.project.activeItem;
		if (qe_actItem(comp) && !qe_check2prop(comp)) {
			pal.grp.leftPart.txtArea.text = comp.selectedProperties[comp.selectedProperties.length - 1].expression;
		} else {
			alert(qe_str.errorOneProp);
		}
		app.endUndoGroup();
	}

	function qe_exportExp(pal) {
		app.beginUndoGroup(qe_str.title);
		var comp = app.project.activeItem;
		if (qe_actItem(comp)) {

			for (var i = 0; i < comp.selectedProperties.length; i++) {

				if (comp.selectedProperties[i].canSetExpression == true) {

					comp.selectedProperties[i].expression = pal.grp.leftPart.txtArea.text;

				} else {
					//alert(qe_str.errorNotSet)
				}
			}
		}
		app.endUndoGroup();
	}

	function qe_toggleExp() {
		var comp = app.project.activeItem;
		if (qe_actItem(comp)) {
			for (var i = 0; i < comp.selectedProperties.length; i++) {
				comp.selectedProperties[i].expressionEnabled = !comp.selectedProperties[i].expressionEnabled;
			}
		}
	}

	function qe_deleteExp() {
		app.beginUndoGroup(qe_str.title);
		var comp = app.project.activeItem;
		if (qe_actItem(comp)) {
			for (var i = 0; i < comp.selectedProperties.length; i++) {
				comp.selectedProperties[i].expression = "";
			}
		}
		app.endUndoGroup();
	}




	function qe_beauty(pal) {
		app.beginUndoGroup(qe_str.title);
		var comp = app.project.activeItem;
		if (qe_actItem(comp)) {
			for (var i = 0; i < comp.selectedProperties.length; i++) {
				if (comp.selectedProperties[i].canSetExpression == true) {
					comp.selectedProperties[i].expression = js_beautify(comp.selectedProperties[i].expression, {
						"jslint_happy": true,
						"space_after_anon_function": true
					});
				}
			}
		}
		try {
			pal.grp.leftPart.txtArea.text = js_beautify(pal.grp.leftPart.txtArea.text, {
				"jslint_happy": true,
				"space_after_anon_function": true
			})
		} catch (e) {}
		app.endUndoGroup();
	}

	function qe_quote(a) {
		return "(\"" + a + "\")";
	}

	function qe_trans(matchName, name) {
		var translatedName = propCompactEnglishExprs[matchName];
		if (translatedName !== undefined) {
			return eval(translatedName);
		} else return ("(" + name + ")");
	}

	function qe_clean2quote(aa) {
		var reg = /\({2}/g;
		var reg2 = /\){2}/g;
		return aa.replace(reg, "(").replace(reg2, ")");
	}
	var propCompactEnglishExprs = {
		"ADBE Transform Group": "'transform'",
		"ADBE Anchor Point": "((prop.propertyGroup(prop.propertyDepth).property('intensity')!=null) || (prop.propertyGroup(prop.propertyDepth).property('zoom')!=null)) ? '.pointOfInterest' : '.anchorPoint'",
		"ADBE Position": "'.position'",
		"ADBE Scale": "'.scale'",
		"ADBE Orientation": "'.orientation'",
		"ADBE Rotate X": "'.xRotation'",
		"ADBE Rotate Y": "'.yRotation'",
		"ADBE Rotate Z": "(prop.propertyGroup(prop.propertyDepth).threeDLayer || (prop.propertyGroup(prop.propertyDepth).property('intensity')!=null) || (prop.propertyGroup(prop.propertyDepth).property('zoom')!=null)) ? '.zRotation' : '.rotation'",
		"ADBE Opacity": "'.opacity'",
		"ADBE Material Options Group": "'materialOption'",
		"ADBE Casts Shadows": "'.castsShadows'",
		"ADBE Light Transmission": "'.lightTransmission'",
		"ADBE Accepts Shadows": "'.acceptsShadows'",
		"ADBE Accepts Lights": "'.acceptsLights'",
		"ADBE Ambient Coefficient": "'.ambient'",
		"ADBE Diffuse Coefficient": "'.diffuse'",
		"ADBE Specular Coefficient": "'.specular'",
		"ADBE Shininess Coefficient": "'.shininess'",
		"ADBE Metal Coefficient": "'.metal'",
		"ADBE Light Options Group": "'lightOption'",
		"ADBE Light Intensity": "'.intensity'",
		"ADBE Light Color": "'.color'",
		"ADBE Light Cone Angle": "'.coneAngle'",
		"ADBE Light Cone Feather 2": "'.coneFeather'",
		"ADBE Light Shadow Darkness": "'.shadowDarkness'",
		"ADBE Light Shadow Diffusion": "'.shadowDiffusion'",
		"ADBE Camera Options Group": "'cameraOption'",
		"ADBE Camera Zoom": "'.zoom'",
		"ADBE Camera Depth of Field": "'.depthOfField'",
		"ADBE Camera Focus Distance": "'.focusDistance'",
		"ADBE Camera Aperture": "'.aperture'",
		"ADBE Camera Blur Level": "'.blurLevel'",
		"ADBE Text Properties": "'text'",
		"ADBE Text Document": "'.sourceText'",
		"ADBE Text Path Options": "'.pathOption'",
		"ADBE Text Path": "'.path'",
		"ADBE Text Reverse Path": "'.reversePath'",
		"ADBE Text Perpendicular To Path": "'.perpendicularToPath'",
		"ADBE Text Force Align Path": "'.forceAlignment'",
		"ADBE Text First Margin": "'.firstMargin'",
		"ADBE Text Last Margin": "'.lastMargin'",
		"ADBE Text More Options": "'.moreOption'",
		"ADBE Text Anchor Point Option": "'.anchorPointGrouping'",
		"ADBE Text Anchor Point Align": "'.groupingAlignment'",
		"ADBE Text Render Order": "'.fillANdStroke'",
		"ADBE Text Character Blend Mode": "'.interCharacterBlending'",
		"ADBE Text Animators": "'.animator'",
		"ADBE Text Selectors": "'.selector'",
		"ADBE Text Percent Start": "'.start'",
		"ADBE Text Percent End": "'.end'",
		"ADBE Text Percent Offset": "'.offset'",
		"ADBE Text Index Start": "'.start'",
		"ADBE Text Index End": "'.end'",
		"ADBE Text Index Offset": "'.offset'",
		"ADBE Text Range Advanced": "'.advanced'",
		"ADBE Text Range Units": "'.units'",
		"ADBE Text Range Type2": "'.basedOn'",
		"ADBE Text Selector Mode": "'.mode'",
		"ADBE Text Selector Max Amount": "'.amount'",
		"ADBE Text Range Shape": "'.shape'",
		"ADBE Text Selector Smoothness": "'.smoothness'",
		"ADBE Text Levels Max Ease": "'.easeHigh'",
		"ADBE Text Levels Min Ease": "'.easeLow'",
		"ADBE Text Randomize Order": "'.randomizeOrder'",
		"ADBE Text Random Seed": "'.randomSeed'",
		"ADBE Text Wiggly Max Amount": "'.maxAmount'",
		"ADBE Text Wiggly Min Amount": "'.minAmount'",
		"ADBE Text Temporal Freq": "'.wigglesSecond'",
		"ADBE Text Character Correlation": "'.correlation'",
		"ADBE Text Temporal Phase": "'.temporalPhase'",
		"ADBE Text Spatial Phase": "'.spatialPhase'",
		"ADBE Text Wiggly Lock Dim": "'.lockDimensions'",
		"ADBE Text Wiggly Random Seed": "'.randomSeed'",
		"ADBE Text Expressible Amount": "'.amount'",
		"ADBE Text Animator Properties": "'.property'",
		"ADBE Text Anchor Point 3D": "'.anchorPoint'",
		"ADBE Text Position 3D": "'.position'",
		"ADBE Text Scale 3D": "'.scale'",
		"ADBE Text Skew": "'.skew'",
		"ADBE Text Skew Axis": "'.skewAxis'",
		"ADBE Text Rotation X": "'.xRotation'",
		"ADBE Text Rotation Y": "'.yRotation'",
		"ADBE Text Rotation": "'.zRotation'",
		"ADBE Text Opacity": "'.opacity'",
		"ADBE Text Fill Opacity": "'.fillOpacity'",
		"ADBE Text Fill Color": "'.fillColor'",
		"ADBE Text Fill Hue": "'.fillHue'",
		"ADBE Text Fill Saturation": "'.fillSaturation'",
		"ADBE Text Fill Brightness": "'.fillBrightness'",
		"ADBE Text Stroke Opacity": "'.strokeOpacity'",
		"ADBE Text Stroke Color": "'.strokeColor'",
		"ADBE Text Stroke Hue": "'.strokeHue'",
		"ADBE Text Stroke Saturation": "'.strokeSaturation'",
		"ADBE Text Stroke Brightness": "'.strokeBrightness'",
		"ADBE Text Stroke Width": "'.strokeWidth'",
		"ADBE Text Line Anchor": "'.lineAnchor'",
		"ADBE Text Line Spacing": "'.lineSpacing'",
		"ADBE Text Track Type": "'.trackingType'",
		"ADBE Text Tracking Amount": "'.trackingAmount'",
		"ADBE Text Character Change Type": "'.characterAlignment'",
		"ADBE Text Character Range": "'.characterRange'",
		"ADBE Text Character Replace": "'.characterValue'",
		"ADBE Text Character Offset": "'.characterOffset'",
		"ADBE Text Blur": "'.blur'",
		"ADBE Mask Parade": "'mask'",
		"ADBE Mask Shape": "'.maskPath'",
		"ADBE Mask Feather": "'.maskFeather'",
		"ADBE Mask Opacity": "'.maskOpacity'",
		"ADBE Mask Offset": "'.maskExpansion'",
		"ADBE Effect Parade": "'effect'",
		"ADBE Paint Group": "'.stroke'",
		"ADBE Paint Shape": "'.path'",
		"ADBE Paint Properties": "'.strokeOption'",
		"ADBE Paint Begin": "'.start'",
		"ADBE Paint End": "'.end'",
		"ADBE Paint Color": "'.color'",
		"ADBE Paint Diameter": "'.diameter'",
		"ADBE Paint Angle": "'.angle'",
		"ADBE Paint Hardness": "'.hardness'",
		"ADBE Paint Roundness": "'.roundness'",
		"ADBE Paint Tip Spacing": "'.spacing'",
		"ADBE Paint Target Channels": "'.channels'",
		"ADBE Paint Opacity": "'.opacity'",
		"ADBE Paint Flow": "'.flow'",
		"ADBE Paint Clone Layer": "'.cloneSource'",
		"ADBE Paint Clone Position": "'.clonePosition'",
		"ADBE Paint Clone Time": "'.cloneTime'",
		"ADBE Paint Clone Time Shift": "'.cloneTimeShift'",
		"ADBE Paint Transform": "'.transform'",
		"ADBE Paint Anchor Point": "'.anchorPoint'",
		"ADBE Paint Position": "'.position'",
		"ADBE Paint Scale": "'.scale'",
		"ADBE Paint Rotation": "'.rotation'",
		"ADBE MTrackers": "'motionTracker'",
		"ADBE MTracker Pt Feature Center": "'.featureCenter'",
		"ADBE MTracker Pt Feature Size": "'.featureSize'",
		"ADBE MTracker Pt Search Ofst": "'.searchOffset'",
		"ADBE MTracker Pt Search Size": "'.searchSize'",
		"ADBE MTracker Pt Confidence": "'.confidence'",
		"ADBE MTracker Pt Attach Pt": "'.attachPoint'",
		"ADBE MTracker Pt Attach Pt Ofst": "'.attachPointOffset'",
		"ADBE Audio Group": "'audio'",
		"ADBE Audio Levels": "'.audioLevels'",
		"ADBE Time Remapping": "'timeRemap'",
		"ADBE Layer Styles": "'layerStyle'",
		"ADBE Blend Options Group": "'.blendingOption'",
		"ADBE Global Angle2": "'.globalLightAngle'",
		"ADBE Global Altitude2": "'.globalLightAltitude'",
		"ADBE Adv Blend Group": "'.advancedBlending'",
		"ADBE Layer Fill Opacity2": "'.fillOpacity'",
		"ADBE R Channel Blend": "'.red'",
		"ADBE G Channel Blend": "'.green'",
		"ADBE B Channel Blend": "'.blue'",
		"ADBE Blend Interior": "'.blendInteriorStylesAsGroup'",
		"ADBE Blend Ranges": "'.useBlendRangesFromSource'",
		"dropShadow/enabled": "'.dropShadow'",
		"dropShadow/mode2": "'.blendMode'",
		"dropShadow/color": "'.color'",
		"dropShadow/opacity": "'.opacity'",
		"dropShadow/useGlobalAngle": "'.useGlobalLight'",
		"dropShadow/localLightingAngle": "'.angle'",
		"dropShadow/distance": "'.distance'",
		"dropShadow/chokeMatte": "'.spread'",
		"dropShadow/blur": "'.size'",
		"dropShadow/noise": "'.noise'",
		"dropShadow/layerConceals": "'.layerKnocksOutDropShadow'",
		"innerShadow/enabled": "'.innerShadow'",
		"innerShadow/mode2": "'.blendMode'",
		"innerShadow/color": "'.color'",
		"innerShadow/opacity": "'.opacity'",
		"innerShadow/useGlobalAngle": "'.useGlobalLight'",
		"innerShadow/localLightingAngle": "'.angle'",
		"innerShadow/distance": "'.distance'",
		"innerShadow/chokeMatte": "'.choke'",
		"innerShadow/blur": "'.size'",
		"innerShadow/noise": "'.noise'",
		"outerGlow/enabled": "'.outerGlow'",
		"outerGlow/mode2": "'.blendMode'",
		"outerGlow/opacity": "'.opacity'",
		"outerGlow/noise": "'.noise'",
		"outerGlow/AEColorChoice": "'.colorType'",
		"outerGlow/color": "'.color'",
		"outerGlow/gradientSmoothness": "'.gradientSmoothness'",
		"outerGlow/glowTechnique": "'.technique'",
		"outerGlow/chokeMatte": "'.spread'",
		"outerGlow/blur": "'.size'",
		"outerGlow/inputRange": "'.range'",
		"outerGlow/shadingNoise": "'.jitter'",
		"innerGlow/enabled": "'.innerGlow'",
		"innerGlow/mode2": "'.blendMode'",
		"innerGlow/opacity": "'.opacity'",
		"innerGlow/noise": "'.noise'",
		"innerGlow/AEColorChoice": "'.colorType'",
		"innerGlow/color": "'.color'",
		"innerGlow/gradientSmoothness": "'.gradientSmoothness'",
		"innerGlow/glowTechnique": "'.technique'",
		"innerGlow/innerGlowSource": "'.source'",
		"innerGlow/chokeMatte": "'.choke'",
		"innerGlow/blur": "'.size'",
		"innerGlow/inputRange": "'.range'",
		"innerGlow/shadingNoise": "'.jitter'",
		"bevelEmboss/enabled": "'.bevelAndEmboss'",
		"bevelEmboss/bevelStyle": "'.style'",
		"bevelEmboss/bevelTechnique": "'.technique'",
		"bevelEmboss/strengthRatio": "'.depth'",
		"bevelEmboss/bevelDirection": "'.direction'",
		"bevelEmboss/blur": "'.size'",
		"bevelEmboss/softness": "'.soften'",
		"bevelEmboss/useGlobalAngle": "'.useGlobalLight'",
		"bevelEmboss/localLightingAngle": "'.angle'",
		"bevelEmboss/localLightingAltitude": "'.altitude'",
		"bevelEmboss/highlightMode": "'.highlightMode'",
		"bevelEmboss/highlightColor": "'.highlightColor'",
		"bevelEmboss/highlightOpacity": "'.highlightOpacity'",
		"bevelEmboss/shadowMode": "'.shadowMode'",
		"bevelEmboss/shadowColor": "'.shadowColor'",
		"bevelEmboss/shadowOpacity": "'.shadowOpacity'",
		"chromeFX/enabled": "'.satin'",
		"chromeFX/mode2": "'.blendMode'",
		"chromeFX/color": "'.color'",
		"chromeFX/opacity": "'.opacity'",
		"chromeFX/localLightingAngle": "'.angle'",
		"chromeFX/distance": "'.distance'",
		"chromeFX/blur": "'.size'",
		"chromeFX/invert": "'.invert'",
		"solidFill/enabled": "'.colorOverlay'",
		"solidFill/mode2": "'.blendMode'",
		"solidFill/color": "'.color'",
		"solidFill/opacity": "'.opacity'",
		"gradientFill/enabled": "'.gradientOverlay'",
		"gradientFill/mode2": "'.blendMode'",
		"gradientFill/opacity": "'.opacity'",
		"gradientFill/gradientSmoothness": "'.gradientSmoothness'",
		"gradientFill/angle": "'.angle'",
		"gradientFill/type": "'.style'",
		"gradientFill/reverse": "'.reverse'",
		"gradientFill/align": "'.alignWithLayer'",
		"gradientFill/scale": "'.scale'",
		"gradientFill/offset": "'.offset'",
		"patternFill/enabled": "'.patternOverlay'",
		"patternFill/mode2": "'.blendMode'",
		"patternFill/opacity": "'.opacity'",
		"patternFill/align": "'.linkWithLayer'",
		"patternFill/scale": "'.scale'",
		"patternFill/phase": "'.offset'",
		"frameFX/enabled": "'.stroke'",
		"frameFX/mode2": "'.blendMode'",
		"frameFX/color": "'.color'",
		"frameFX/size": "'.size'",
		"frameFX/opacity": "'.opacity'",
		"frameFX/style": "'.position'",
		"ADBE Root Vectors Group": "'content'",
		"ADBE Vectors Group": "'.content'",
		"ADBE Vector Transform Group": "'.transform'",
		"ADBE Extrsn Options Group": "'geometryOption'",
		"ADBE Plane Options Group": "'geometryOption'",
		"ADBE Layer Overrides": "'masterProperty'",
	};

	var isKBarRunning = (typeof kbar !== 'undefined');

	if (isKBarRunning && kbar.button && kbar.button.argument) {
		var version = kbar.version; 

		var button = kbar.button; 

		var id = button.id; 
		var name = button.name; 
		var argument = button.argument; 

		switch (button.argument) {
		case 'beauty':
			qe_beauty();
			break;

		case 'delete':
			qe_deleteExp();
			break;

		case 'toggle':
			qe_toggleExp();
			break;

		default:
			alert(qe_str.kbarErr);
			break;
		}
	} else {
		var ui = qe_buildUI(thisObj);
		var targetProp = null;

		if (ui !== null) {
			if (ui instanceof Window) {
				ui.center();
				ui.show();
			} else {
				ui.layout.layout(true);
			}
		}
	}






	//////////////////////////////////////////////////////////

	function mergeOpts(allOptions, targetType) {
		var finalOpts = {};
		var name;

		for (name in allOptions) {
			if (name !== targetType) {
				finalOpts[name] = allOptions[name];
			}
		}

		//merge in the per type settings for the targetType
		if (targetType in allOptions) {
			for (name in allOptions[targetType]) {
				finalOpts[name] = allOptions[targetType][name];
			}
		}
		return finalOpts;
	}

	function js_beautify(js_source_text, options) {

		var acorn = {};
		(function (exports) {


			//var nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/; // jshint ignore:line
			var nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
			var nonASCIIidentifierChars = "\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u0620-\u0649\u0672-\u06d3\u06e7-\u06e8\u06fb-\u06fc\u0730-\u074a\u0800-\u0814\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0840-\u0857\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962-\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09d7\u09df-\u09e0\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5f-\u0b60\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2-\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d46-\u0d48\u0d57\u0d62-\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e34-\u0e3a\u0e40-\u0e45\u0e50-\u0e59\u0eb4-\u0eb9\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f41-\u0f47\u0f71-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1029\u1040-\u1049\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u170e-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17b2\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1920-\u192b\u1930-\u193b\u1951-\u196d\u19b0-\u19c0\u19c8-\u19c9\u19d0-\u19d9\u1a00-\u1a15\u1a20-\u1a53\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b46-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1bb0-\u1bb9\u1be6-\u1bf3\u1c00-\u1c22\u1c40-\u1c49\u1c5b-\u1c7d\u1cd0-\u1cd2\u1d00-\u1dbe\u1e01-\u1f15\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2d81-\u2d96\u2de0-\u2dff\u3021-\u3028\u3099\u309a\ua640-\ua66d\ua674-\ua67d\ua69f\ua6f0-\ua6f1\ua7f8-\ua800\ua806\ua80b\ua823-\ua827\ua880-\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8f3-\ua8f7\ua900-\ua909\ua926-\ua92d\ua930-\ua945\ua980-\ua983\ua9b3-\ua9c0\uaa00-\uaa27\uaa40-\uaa41\uaa4c-\uaa4d\uaa50-\uaa59\uaa7b\uaae0-\uaae9\uaaf2-\uaaf3\uabc0-\uabe1\uabec\uabed\uabf0-\uabf9\ufb20-\ufb28\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";
			var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
			var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

			exports.newline = /[\n\r\u2028\u2029]/;

			exports.lineBreak = new RegExp('\r\n|' + exports.newline.source);
			exports.allLineBreaks = new RegExp(exports.lineBreak.source, 'g');

			exports.isIdentifierStart = function (code) {
				// permit $ (36) and @ (64). @ is used in ES7 decorators.
				if (code < 65) return code === 36 || code === 64;
				// 65 through 91 are uppercase letters.
				if (code < 91) return true;
				// permit _ (95).
				if (code < 97) return code === 95;
				// 97 through 123 are lowercase letters.
				if (code < 123) return true;
				return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code));
			};


			exports.isIdentifierChar = function (code) {
				if (code < 48) return code === 36;
				if (code < 58) return true;
				if (code < 65) return false;
				if (code < 91) return true;
				if (code < 97) return code === 95;
				if (code < 123) return true;
				return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code));
			};
		})(acorn);
		/* jshint curly: true */

		function in_array(what, arr) {
			for (var i = 0; i < arr.length; i += 1) {
				if (arr[i] === what) {
					return true;
				}
			}
			return false;
		}

		function trim(s) {
			return s.replace(/^\s+|\s+$/g, '');
		}

		function ltrim(s) {
			return s.replace(/^\s+/g, '');
		}

		function sanitizeOperatorPosition(opPosition) {

			if (!Object.values) {
				Object.values = function (o) {
					if (o !== Object(o)) {
						throw new TypeError('Object.values called on a non-object');
					}
					var k = [],
						p;
					for (p in o) {
						if (Object.prototype.hasOwnProperty.call(o, p)) {
							k.push(o[p]);
						}
					}
					return k;
				};
			}

			opPosition = opPosition || OPERATOR_POSITION.before_newline;

			var validPositionValues = Object.values(OPERATOR_POSITION);

			if (!in_array(opPosition, validPositionValues)) {
				throw new Error("Invalid Option Value: The option 'operator_position' must be one of the following values\n" +
					validPositionValues +
					"\nYou passed in: '" + opPosition + "'");
			}

			return opPosition;
		}

		var OPERATOR_POSITION = {
			before_newline: 'before-newline',
			after_newline: 'after-newline',
			preserve_newline: 'preserve-newline',
		};

		var OPERATOR_POSITION_BEFORE_OR_PRESERVE = [OPERATOR_POSITION.before_newline, OPERATOR_POSITION.preserve_newline];

		var MODE = {
			BlockStatement: 'BlockStatement', // 'BLOCK'
			Statement: 'Statement', // 'STATEMENT'
			ObjectLiteral: 'ObjectLiteral', // 'OBJECT',
			ArrayLiteral: 'ArrayLiteral', //'[EXPRESSION]',
			ForInitializer: 'ForInitializer', //'(FOR-EXPRESSION)',
			Conditional: 'Conditional', //'(COND-EXPRESSION)',
			Expression: 'Expression' //'(EXPRESSION)'
		};

		function Beautifier(js_source_text, options) {
			"use strict";
			var output;
			var tokens = [],
				token_pos;
			var Tokenizer;
			var current_token;
			var last_type, last_last_text, indent_string;
			var flags, previous_flags, flag_store;
			var prefix;

			var handlers, opt;
			var baseIndentString = '';

			handlers = {
				'TK_START_EXPR': handle_start_expr,
				'TK_END_EXPR': handle_end_expr,
				'TK_START_BLOCK': handle_start_block,
				'TK_END_BLOCK': handle_end_block,
				'TK_WORD': handle_word,
				'TK_RESERVED': handle_word,
				'TK_SEMICOLON': handle_semicolon,
				'TK_STRING': handle_string,
				'TK_EQUALS': handle_equals,
				'TK_OPERATOR': handle_operator,
				'TK_COMMA': handle_comma,
				'TK_BLOCK_COMMENT': handle_block_comment,
				'TK_COMMENT': handle_comment,
				'TK_DOT': handle_dot,
				'TK_UNKNOWN': handle_unknown,
				'TK_EOF': handle_eof
			};

			function create_flags(flags_base, mode) {
				var next_indent_level = 0;
				if (flags_base) {
					next_indent_level = flags_base.indentation_level;
					if (!output.just_added_newline() &&
						flags_base.line_indent_level > next_indent_level) {
						next_indent_level = flags_base.line_indent_level;
					}
				}

				var next_flags = {
					mode: mode,
					parent: flags_base,
					last_text: flags_base ? flags_base.last_text : '', // last token text
					last_word: flags_base ? flags_base.last_word : '', // last 'TK_WORD' passed
					declaration_statement: false,
					declaration_assignment: false,
					multiline_frame: false,
					inline_frame: false,
					if_block: false,
					else_block: false,
					do_block: false,
					do_while: false,
					import_block: false,
					in_case_statement: false, // switch(..){ INSIDE HERE }
					in_case: false, // we're on the exact line with "case 0:"
					case_body: false, // the indented case-action block
					indentation_level: next_indent_level,
					line_indent_level: flags_base ? flags_base.line_indent_level : next_indent_level,
					start_line_index: output.get_line_number(),
					ternary_depth: 0
				};
				return next_flags;
			}

			options = options ? options : {};

			options = mergeOpts(options, 'js');

			opt = {};

			// compatibility, re
			if (options.brace_style === "expand-strict") { //graceful handling of deprecated option
				options.brace_style = "expand";
			} else if (options.brace_style === "collapse-preserve-inline") { //graceful handling of deprecated option
				options.brace_style = "collapse,preserve-inline";
			} else if (options.braces_on_own_line !== undefined) { //graceful handling of deprecated option
				options.brace_style = options.braces_on_own_line ? "expand" : "collapse";
			} else if (!options.brace_style) //Nothing exists to set it
			{
				options.brace_style = "collapse";
			}


			var brace_style_split = options.brace_style.split(/[^a-zA-Z0-9_\-]+/);
			opt.brace_style = brace_style_split[0];
			opt.brace_preserve_inline = brace_style_split[1] ? brace_style_split[1] : false;

			opt.indent_size = options.indent_size ? parseInt(options.indent_size, 10) : 4;
			opt.indent_char = options.indent_char ? options.indent_char : ' ';
			opt.eol = options.eol ? options.eol : 'auto';
			opt.preserve_newlines = (options.preserve_newlines === undefined) ? true : options.preserve_newlines;
			opt.break_chained_methods = (options.break_chained_methods === undefined) ? false : options.break_chained_methods;
			opt.max_preserve_newlines = (options.max_preserve_newlines === undefined) ? 0 : parseInt(options.max_preserve_newlines, 10);
			opt.space_in_paren = (options.space_in_paren === undefined) ? false : options.space_in_paren;
			opt.space_in_empty_paren = (options.space_in_empty_paren === undefined) ? false : options.space_in_empty_paren;
			opt.jslint_happy = (options.jslint_happy === undefined) ? false : options.jslint_happy;
			opt.space_after_anon_function = (options.space_after_anon_function === undefined) ? false : options.space_after_anon_function;
			opt.keep_array_indentation = (options.keep_array_indentation === undefined) ? false : options.keep_array_indentation;
			opt.space_before_conditional = (options.space_before_conditional === undefined) ? true : options.space_before_conditional;
			opt.unescape_strings = (options.unescape_strings === undefined) ? false : options.unescape_strings;
			opt.wrap_line_length = (options.wrap_line_length === undefined) ? 0 : parseInt(options.wrap_line_length, 10);
			opt.e4x = (options.e4x === undefined) ? false : options.e4x;
			opt.end_with_newline = (options.end_with_newline === undefined) ? false : options.end_with_newline;
			opt.comma_first = (options.comma_first === undefined) ? false : options.comma_first;
			opt.operator_position = sanitizeOperatorPosition(options.operator_position);

			// For testing of beautify ignore:start directive
			opt.test_output_raw = (options.test_output_raw === undefined) ? false : options.test_output_raw;

			// force opt.space_after_anon_function to true if opt.jslint_happy
			if (opt.jslint_happy) {
				opt.space_after_anon_function = true;
			}

			if (options.indent_with_tabs) {
				opt.indent_char = '\t';
				opt.indent_size = 1;
			}

			if (opt.eol === 'auto') {
				opt.eol = '\n';
				if (js_source_text && acorn.lineBreak.test(js_source_text || '')) {
					opt.eol = js_source_text.match(acorn.lineBreak)[0];
				}
			}

			opt.eol = opt.eol.replace(/\\r/, '\r').replace(/\\n/, '\n');

			//----------------------------------
			indent_string = '';
			while (opt.indent_size > 0) {
				indent_string += opt.indent_char;
				opt.indent_size -= 1;
			}

			var preindent_index = 0;
			if (js_source_text && js_source_text.length) {
				while ((js_source_text.charAt(preindent_index) === ' ' ||
						js_source_text.charAt(preindent_index) === '\t')) {
					baseIndentString += js_source_text.charAt(preindent_index);
					preindent_index += 1;
				}
				js_source_text = js_source_text.substring(preindent_index);
			}

			last_type = 'TK_START_BLOCK'; // last token type
			last_last_text = ''; // pre-last token text
			output = new Output(indent_string, baseIndentString);

			// If testing the ignore directive, start with output disable set to true
			output.raw = opt.test_output_raw;

			flag_store = [];
			set_mode(MODE.BlockStatement);

			this.beautify = function () {

				/*jshint onevar:true */
				var sweet_code;
				Tokenizer = new tokenizer(js_source_text, opt, indent_string);
				tokens = Tokenizer.tokenize();
				token_pos = 0;

				current_token = get_token();
				while (current_token) {
					handlers[current_token.type]();

					last_last_text = flags.last_text;
					last_type = current_token.type;
					flags.last_text = current_token.text;

					token_pos += 1;
					current_token = get_token();
				}

				sweet_code = output.get_code();
				if (opt.end_with_newline) {
					sweet_code += '\n';
				}

				if (opt.eol !== '\n') {
					sweet_code = sweet_code.replace(/[\n]/g, opt.eol);
				}

				return sweet_code;
			};

			function handle_whitespace_and_comments(local_token, preserve_statement_flags) {
				var newlines = local_token.newlines;
				var keep_whitespace = opt.keep_array_indentation && is_array(flags.mode);
				var temp_token = current_token;

				for (var h = 0; h < local_token.comments_before.length; h++) {

					current_token = local_token.comments_before[h];
					handle_whitespace_and_comments(current_token, preserve_statement_flags);
					handlers[current_token.type](preserve_statement_flags);
				}
				current_token = temp_token;

				if (keep_whitespace) {
					for (var i = 0; i < newlines; i += 1) {
						print_newline(i > 0, preserve_statement_flags);
					}
				} else {
					if (opt.max_preserve_newlines && newlines > opt.max_preserve_newlines) {
						newlines = opt.max_preserve_newlines;
					}

					if (opt.preserve_newlines) {
						if (local_token.newlines > 1) {
							print_newline(false, preserve_statement_flags);
							for (var j = 1; j < newlines; j += 1) {
								print_newline(true, preserve_statement_flags);
							}
						}
					}
				}

			}

			function split_linebreaks(s) {
				//return s.split(/\x0d\x0a|\x0a/);

				s = s.replace(acorn.allLineBreaks, '\n');
				var out = [],
					idx = s.indexOf("\n");
				while (idx !== -1) {
					out.push(s.substring(0, idx));
					s = s.substring(idx + 1);
					idx = s.indexOf("\n");
				}
				if (s.length) {
					out.push(s);
				}
				return out;
			}

			var newline_restricted_tokens = ['break', 'continue', 'return', 'throw'];

			function allow_wrap_or_preserved_newline(force_linewrap) {
				force_linewrap = (force_linewrap === undefined) ? false : force_linewrap;

				// Never wrap the first token on a line
				if (output.just_added_newline()) {
					return;
				}

				var shouldPreserveOrForce = (opt.preserve_newlines && current_token.wanted_newline) || force_linewrap;
				var operatorLogicApplies = in_array(flags.last_text, Tokenizer.positionable_operators) || in_array(current_token.text, Tokenizer.positionable_operators);

				if (operatorLogicApplies) {
					var shouldPrintOperatorNewline = (
							in_array(flags.last_text, Tokenizer.positionable_operators) &&
							in_array(opt.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)
						) ||
						in_array(current_token.text, Tokenizer.positionable_operators);
					shouldPreserveOrForce = shouldPreserveOrForce && shouldPrintOperatorNewline;
				}

				if (shouldPreserveOrForce) {
					print_newline(false, true);
				} else if (opt.wrap_line_length) {
					if (last_type === 'TK_RESERVED' && in_array(flags.last_text, newline_restricted_tokens)) {

						return;
					}
					var proposed_line_length = output.current_line.get_character_count() + current_token.text.length +
						(output.space_before_token ? 1 : 0);
					if (proposed_line_length >= opt.wrap_line_length) {
						print_newline(false, true);
					}
				}
			}

			function print_newline(force_newline, preserve_statement_flags) {
				if (!preserve_statement_flags) {
					if (flags.last_text !== ';' && flags.last_text !== ',' && flags.last_text !== '=' && last_type !== 'TK_OPERATOR') {
						var next_token = get_token(1);
						while (flags.mode === MODE.Statement &&
							!(flags.if_block && next_token && next_token.type === 'TK_RESERVED' && next_token.text === 'else') &&
							!flags.do_block) {
							restore_mode();
						}
					}
				}

				if (output.add_new_line(force_newline)) {
					flags.multiline_frame = true;
				}
			}

			function print_token_line_indentation() {
				if (output.just_added_newline()) {
					if (opt.keep_array_indentation && is_array(flags.mode) && current_token.wanted_newline) {
						output.current_line.push(current_token.whitespace_before);
						output.space_before_token = false;
					} else if (output.set_indent(flags.indentation_level)) {
						flags.line_indent_level = flags.indentation_level;
					}
				}
			}

			function print_token(printable_token) {
				if (output.raw) {
					output.add_raw_token(current_token);
					return;
				}

				if (opt.comma_first && last_type === 'TK_COMMA' &&
					output.just_added_newline()) {
					if (output.previous_line.last() === ',') {
						var popped = output.previous_line.pop();

						if (output.previous_line.is_empty()) {
							output.previous_line.push(popped);
							output.trim(true);
							output.current_line.pop();
							output.trim();
						}

						// add the comma in front of the next token
						print_token_line_indentation();
						output.add_token(',');
						output.space_before_token = true;
					}
				}

				printable_token = printable_token || current_token.text;
				print_token_line_indentation();
				output.add_token(printable_token);
			}

			function indent() {
				flags.indentation_level += 1;
			}

			function deindent() {
				if (flags.indentation_level > 0 &&
					((!flags.parent) || flags.indentation_level > flags.parent.indentation_level)) {
					flags.indentation_level -= 1;

				}
			}

			function set_mode(mode) {
				if (flags) {
					flag_store.push(flags);
					previous_flags = flags;
				} else {
					previous_flags = create_flags(null, mode);
				}

				flags = create_flags(previous_flags, mode);
			}

			function is_array(mode) {
				return mode === MODE.ArrayLiteral;
			}

			function is_expression(mode) {
				return in_array(mode, [MODE.Expression, MODE.ForInitializer, MODE.Conditional]);
			}

			function restore_mode() {
				if (flag_store.length > 0) {
					previous_flags = flags;
					flags = flag_store.pop();
					if (previous_flags.mode === MODE.Statement) {
						output.remove_redundant_indentation(previous_flags);
					}
				}
			}

			function start_of_object_property() {
				return flags.parent.mode === MODE.ObjectLiteral && flags.mode === MODE.Statement && (
					(flags.last_text === ':' && flags.ternary_depth === 0) || (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['get', 'set'])));
			}

			function start_of_statement() {
				if (
					(last_type === 'TK_RESERVED' && in_array(flags.last_text, ['var', 'let', 'const']) && current_token.type === 'TK_WORD') ||
					(last_type === 'TK_RESERVED' && flags.last_text === 'do') ||
					(last_type === 'TK_RESERVED' && in_array(flags.last_text, ['return', 'throw']) && !current_token.wanted_newline) ||
					(last_type === 'TK_RESERVED' && flags.last_text === 'else' &&
						!(current_token.type === 'TK_RESERVED' && current_token.text === 'if' && !current_token.comments_before.length)) ||
					(last_type === 'TK_END_EXPR' && (previous_flags.mode === MODE.ForInitializer || previous_flags.mode === MODE.Conditional)) ||
					(last_type === 'TK_WORD' && flags.mode === MODE.BlockStatement &&
						!flags.in_case &&
						!(current_token.text === '--' || current_token.text === '++') &&
						last_last_text !== 'function' &&
						current_token.type !== 'TK_WORD' && current_token.type !== 'TK_RESERVED') ||
					(flags.mode === MODE.ObjectLiteral && (
						(flags.last_text === ':' && flags.ternary_depth === 0) || (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['get', 'set']))))
				) {

					set_mode(MODE.Statement);
					indent();

					handle_whitespace_and_comments(current_token, true);

					if (!start_of_object_property()) {
						allow_wrap_or_preserved_newline(
							current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['do', 'for', 'if', 'while']));
					}

					return true;
				}
				return false;
			}

			function all_lines_start_with(lines, c) {
				for (var i = 0; i < lines.length; i++) {
					var line = trim(lines[i]);
					if (line.charAt(0) !== c) {
						return false;
					}
				}
				return true;
			}

			function each_line_matches_indent(lines, indent) {
				var i = 0,
					len = lines.length,
					line;
				for (; i < len; i++) {
					line = lines[i];
					// allow empty lines to pass through
					if (line && line.indexOf(indent) !== 0) {
						return false;
					}
				}
				return true;
			}

			function is_special_word(word) {
				return in_array(word, ['case', 'return', 'do', 'if', 'throw', 'else']);
			}

			function get_token(offset) {
				var index = token_pos + (offset || 0);
				return (index < 0 || index >= tokens.length) ? null : tokens[index];
			}

			function handle_start_expr() {
				// The conditional starts the statement if appropriate.
				if (!start_of_statement()) {
					handle_whitespace_and_comments(current_token);
				}

				var next_mode = MODE.Expression;
				if (current_token.text === '[') {

					if (last_type === 'TK_WORD' || flags.last_text === ')') {
						// this is array index specifier, break immediately
						// a[x], fn()[x]
						if (last_type === 'TK_RESERVED' && in_array(flags.last_text, Tokenizer.line_starters)) {
							output.space_before_token = true;
						}
						set_mode(next_mode);
						print_token();
						indent();
						if (opt.space_in_paren) {
							output.space_before_token = true;
						}
						return;
					}

					next_mode = MODE.ArrayLiteral;
					if (is_array(flags.mode)) {
						if (flags.last_text === '[' ||
							(flags.last_text === ',' && (last_last_text === ']' || last_last_text === '}'))) {

							if (!opt.keep_array_indentation) {
								print_newline();
							}
						}
					}

				} else {
					if (last_type === 'TK_RESERVED' && flags.last_text === 'for') {
						next_mode = MODE.ForInitializer;
					} else if (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['if', 'while'])) {
						next_mode = MODE.Conditional;
					} else {
						// next_mode = MODE.Expression;
					}
				}

				if (flags.last_text === ';' || last_type === 'TK_START_BLOCK') {
					print_newline();
				} else if (last_type === 'TK_END_EXPR' || last_type === 'TK_START_EXPR' || last_type === 'TK_END_BLOCK' || flags.last_text === '.') {
					// TODO: Consider whether forcing this is required.  Review failing tests when removed.
					allow_wrap_or_preserved_newline(current_token.wanted_newline);
					// do nothing on (( and )( and ][ and ]( and .(
				} else if (!(last_type === 'TK_RESERVED' && current_token.text === '(') && last_type !== 'TK_WORD' && last_type !== 'TK_OPERATOR') {
					output.space_before_token = true;
				} else if ((last_type === 'TK_RESERVED' && (flags.last_word === 'function' || flags.last_word === 'typeof')) ||
					(flags.last_text === '*' &&
						(in_array(last_last_text, ['function', 'yield']) ||
							(flags.mode === MODE.ObjectLiteral && in_array(last_last_text, ['{', ',']))))) {

					if (opt.space_after_anon_function) {
						output.space_before_token = true;
					}
				} else if (last_type === 'TK_RESERVED' && (in_array(flags.last_text, Tokenizer.line_starters) || flags.last_text === 'catch')) {
					if (opt.space_before_conditional) {
						output.space_before_token = true;
					}
				}

				// Should be a space between await and an IIFE
				if (current_token.text === '(' && last_type === 'TK_RESERVED' && flags.last_word === 'await') {
					output.space_before_token = true;
				}

				if (current_token.text === '(') {
					if (last_type === 'TK_EQUALS' || last_type === 'TK_OPERATOR') {
						if (!start_of_object_property()) {
							allow_wrap_or_preserved_newline();
						}
					}
				}


				if (current_token.text === '(' && last_type !== 'TK_WORD' && last_type !== 'TK_RESERVED') {
					allow_wrap_or_preserved_newline();
				}

				set_mode(next_mode);
				print_token();
				if (opt.space_in_paren) {
					output.space_before_token = true;
				}

				// In all cases, if we newline while inside an expression it should be indented.
				indent();
			}

			function handle_end_expr() {

				while (flags.mode === MODE.Statement) {
					restore_mode();
				}

				handle_whitespace_and_comments(current_token);

				if (flags.multiline_frame) {
					allow_wrap_or_preserved_newline(current_token.text === ']' && is_array(flags.mode) && !opt.keep_array_indentation);
				}

				if (opt.space_in_paren) {
					if (last_type === 'TK_START_EXPR' && !opt.space_in_empty_paren) {
						// () [] no inner space in empty parens like these, ever, ref #320
						output.trim();
						output.space_before_token = false;
					} else {
						output.space_before_token = true;
					}
				}
				if (current_token.text === ']' && opt.keep_array_indentation) {
					print_token();
					restore_mode();
				} else {
					restore_mode();
					print_token();
				}
				output.remove_redundant_indentation(previous_flags);

				// do {} while () // no statement required after
				if (flags.do_while && previous_flags.mode === MODE.Conditional) {
					previous_flags.mode = MODE.Expression;
					flags.do_block = false;
					flags.do_while = false;

				}
			}

			function handle_start_block() {
				handle_whitespace_and_comments(current_token);

				// Check if this is should be treated as a ObjectLiteral
				var next_token = get_token(1);
				var second_token = get_token(2);
				if (second_token && (
						(in_array(second_token.text, [':', ',']) && in_array(next_token.type, ['TK_STRING', 'TK_WORD', 'TK_RESERVED'])) ||
						(in_array(next_token.text, ['get', 'set', '...']) && in_array(second_token.type, ['TK_WORD', 'TK_RESERVED']))
					)) {

					if (!in_array(last_last_text, ['class', 'interface'])) {
						set_mode(MODE.ObjectLiteral);
					} else {
						set_mode(MODE.BlockStatement);
					}
				} else if (last_type === 'TK_OPERATOR' && flags.last_text === '=>') {
					// arrow function: (param1, paramN) => { statements }
					set_mode(MODE.BlockStatement);
				} else if (in_array(last_type, ['TK_EQUALS', 'TK_START_EXPR', 'TK_COMMA', 'TK_OPERATOR']) ||
					(last_type === 'TK_RESERVED' && in_array(flags.last_text, ['return', 'throw', 'import', 'default']))
				) {
					set_mode(MODE.ObjectLiteral);
				} else {
					set_mode(MODE.BlockStatement);
				}

				var empty_braces = !next_token.comments_before.length && next_token.text === '}';
				var empty_anonymous_function = empty_braces && flags.last_word === 'function' &&
					last_type === 'TK_END_EXPR';

				if (opt.brace_preserve_inline) // check for inline, set inline_frame if so
				{
					// search forward for a newline wanted inside this block
					var index = 0;
					var check_token = null;
					flags.inline_frame = true;
					do {
						index += 1;
						check_token = get_token(index);
						if (check_token.wanted_newline) {
							flags.inline_frame = false;
							break;
						}
					} while (check_token.type !== 'TK_EOF' &&
						!(check_token.type === 'TK_END_BLOCK' && check_token.opened === current_token));
				}

				if ((opt.brace_style === "expand" ||
						(opt.brace_style === "none" && current_token.wanted_newline)) &&
					!flags.inline_frame) {
					if (last_type !== 'TK_OPERATOR' &&
						(empty_anonymous_function ||
							last_type === 'TK_EQUALS' ||
							(last_type === 'TK_RESERVED' && is_special_word(flags.last_text) && flags.last_text !== 'else'))) {
						output.space_before_token = true;
					} else {
						print_newline(false, true);
					}
				} else { // collapse || inline_frame
					if (is_array(previous_flags.mode) && (last_type === 'TK_START_EXPR' || last_type === 'TK_COMMA')) {
						if (last_type === 'TK_COMMA' || opt.space_in_paren) {
							output.space_before_token = true;
						}

						if (last_type === 'TK_COMMA' || (last_type === 'TK_START_EXPR' && flags.inline_frame)) {
							allow_wrap_or_preserved_newline();
							previous_flags.multiline_frame = previous_flags.multiline_frame || flags.multiline_frame;
							flags.multiline_frame = false;
						}
					}
					if (last_type !== 'TK_OPERATOR' && last_type !== 'TK_START_EXPR') {
						if (last_type === 'TK_START_BLOCK' && !flags.inline_frame) {
							print_newline();
						} else {
							output.space_before_token = true;
						}
					}
				}
				print_token();
				indent();
			}

			function handle_end_block() {
				// statements must all be closed when their container closes
				handle_whitespace_and_comments(current_token);

				while (flags.mode === MODE.Statement) {
					restore_mode();
				}

				var empty_braces = last_type === 'TK_START_BLOCK';

				if (flags.inline_frame && !empty_braces) { // try inline_frame (only set if opt.braces-preserve-inline) first
					output.space_before_token = true;
				} else if (opt.brace_style === "expand") {
					if (!empty_braces) {
						print_newline();
					}
				} else {
					// skip {}
					if (!empty_braces) {
						if (is_array(flags.mode) && opt.keep_array_indentation) {
							// we REALLY need a newline here, but newliner would skip that
							opt.keep_array_indentation = false;
							print_newline();
							opt.keep_array_indentation = true;

						} else {
							print_newline();
						}
					}
				}
				restore_mode();
				print_token();
			}

			function handle_word() {
				if (current_token.type === 'TK_RESERVED') {
					if (in_array(current_token.text, ['set', 'get']) && flags.mode !== MODE.ObjectLiteral) {
						current_token.type = 'TK_WORD';
					} else if (in_array(current_token.text, ['as', 'from']) && !flags.import_block) {
						current_token.type = 'TK_WORD';
					} else if (flags.mode === MODE.ObjectLiteral) {
						var next_token = get_token(1);
						if (next_token.text === ':') {
							current_token.type = 'TK_WORD';
						}
					}
				}

				if (start_of_statement()) {
					// The conditional starts the statement if appropriate.
					if (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['var', 'let', 'const']) && current_token.type === 'TK_WORD') {
						flags.declaration_statement = true;
					}
				} else if (current_token.wanted_newline && !is_expression(flags.mode) &&
					(last_type !== 'TK_OPERATOR' || (flags.last_text === '--' || flags.last_text === '++')) &&
					last_type !== 'TK_EQUALS' &&
					(opt.preserve_newlines || !(last_type === 'TK_RESERVED' && in_array(flags.last_text, ['var', 'let', 'const', 'set', 'get'])))) {
					handle_whitespace_and_comments(current_token);
					print_newline();
				} else {
					handle_whitespace_and_comments(current_token);
				}

				if (flags.do_block && !flags.do_while) {
					if (current_token.type === 'TK_RESERVED' && current_token.text === 'while') {
						// do {} ## while ()
						output.space_before_token = true;
						print_token();
						output.space_before_token = true;
						flags.do_while = true;
						return;
					} else {

						print_newline();
						flags.do_block = false;
					}
				}


				if (flags.if_block) {
					if (!flags.else_block && (current_token.type === 'TK_RESERVED' && current_token.text === 'else')) {
						flags.else_block = true;
					} else {
						while (flags.mode === MODE.Statement) {
							restore_mode();
						}
						flags.if_block = false;
						flags.else_block = false;
					}
				}

				if (current_token.type === 'TK_RESERVED' && (current_token.text === 'case' || (current_token.text === 'default' && flags.in_case_statement))) {
					print_newline();
					if (flags.case_body || opt.jslint_happy) {
						// switch cases following one another
						deindent();
						flags.case_body = false;
					}
					print_token();
					flags.in_case = true;
					flags.in_case_statement = true;
					return;
				}

				if (last_type === 'TK_COMMA' || last_type === 'TK_START_EXPR' || last_type === 'TK_EQUALS' || last_type === 'TK_OPERATOR') {
					if (!start_of_object_property()) {
						allow_wrap_or_preserved_newline();
					}
				}

				if (current_token.type === 'TK_RESERVED' && current_token.text === 'function') {
					if (in_array(flags.last_text, ['}', ';']) ||
						(output.just_added_newline() && !(in_array(flags.last_text, ['(', '[', '{', ':', '=', ',']) || last_type === 'TK_OPERATOR'))) {

						if (!output.just_added_blankline() && !current_token.comments_before.length) {
							print_newline();
							print_newline(true);
						}
					}
					if (last_type === 'TK_RESERVED' || last_type === 'TK_WORD') {
						if (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['get', 'set', 'new', 'return', 'export', 'async'])) {
							output.space_before_token = true;
						} else if (last_type === 'TK_RESERVED' && flags.last_text === 'default' && last_last_text === 'export') {
							output.space_before_token = true;
						} else {
							print_newline();
						}
					} else if (last_type === 'TK_OPERATOR' || flags.last_text === '=') {
						// foo = function
						output.space_before_token = true;
					} else if (!flags.multiline_frame && (is_expression(flags.mode) || is_array(flags.mode))) {
						// (function
					} else {
						print_newline();
					}

					print_token();
					flags.last_word = current_token.text;
					return;
				}

				prefix = 'NONE';

				if (last_type === 'TK_END_BLOCK') {

					if (previous_flags.inline_frame) {
						prefix = 'SPACE';
					} else if (!(current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['else', 'catch', 'finally', 'from']))) {
						prefix = 'NEWLINE';
					} else {
						if (opt.brace_style === "expand" ||
							opt.brace_style === "end-expand" ||
							(opt.brace_style === "none" && current_token.wanted_newline)) {
							prefix = 'NEWLINE';
						} else {
							prefix = 'SPACE';
							output.space_before_token = true;
						}
					}
				} else if (last_type === 'TK_SEMICOLON' && flags.mode === MODE.BlockStatement) {
					// TODO: Should this be for STATEMENT as well?
					prefix = 'NEWLINE';
				} else if (last_type === 'TK_SEMICOLON' && is_expression(flags.mode)) {
					prefix = 'SPACE';
				} else if (last_type === 'TK_STRING') {
					prefix = 'NEWLINE';
				} else if (last_type === 'TK_RESERVED' || last_type === 'TK_WORD' ||
					(flags.last_text === '*' &&
						(in_array(last_last_text, ['function', 'yield']) ||
							(flags.mode === MODE.ObjectLiteral && in_array(last_last_text, ['{', ',']))))) {
					prefix = 'SPACE';
				} else if (last_type === 'TK_START_BLOCK') {
					if (flags.inline_frame) {
						prefix = 'SPACE';
					} else {
						prefix = 'NEWLINE';
					}
				} else if (last_type === 'TK_END_EXPR') {
					output.space_before_token = true;
					prefix = 'NEWLINE';
				}

				if (current_token.type === 'TK_RESERVED' && in_array(current_token.text, Tokenizer.line_starters) && flags.last_text !== ')') {
					if (flags.inline_frame || flags.last_text === 'else' || flags.last_text === 'export') {
						prefix = 'SPACE';
					} else {
						prefix = 'NEWLINE';
					}

				}

				if (current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['else', 'catch', 'finally'])) {
					if ((!(last_type === 'TK_END_BLOCK' && previous_flags.mode === MODE.BlockStatement) ||
							opt.brace_style === "expand" ||
							opt.brace_style === "end-expand" ||
							(opt.brace_style === "none" && current_token.wanted_newline)) &&
						!flags.inline_frame) {
						print_newline();
					} else {
						output.trim(true);
						var line = output.current_line;

						if (line.last() !== '}') {
							print_newline();
						}
						output.space_before_token = true;
					}
				} else if (prefix === 'NEWLINE') {
					if (last_type === 'TK_RESERVED' && is_special_word(flags.last_text)) {
						// no newline between 'return nnn'
						output.space_before_token = true;
					} else if (last_type !== 'TK_END_EXPR') {
						if ((last_type !== 'TK_START_EXPR' || !(current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['var', 'let', 'const']))) && flags.last_text !== ':') {
							// no need to force newline on 'var': for (var x = 0...)
							if (current_token.type === 'TK_RESERVED' && current_token.text === 'if' && flags.last_text === 'else') {
								// no newline for } else if {
								output.space_before_token = true;
							} else {
								print_newline();
							}
						}
					} else if (current_token.type === 'TK_RESERVED' && in_array(current_token.text, Tokenizer.line_starters) && flags.last_text !== ')') {
						print_newline();
					}
				} else if (flags.multiline_frame && is_array(flags.mode) && flags.last_text === ',' && last_last_text === '}') {
					print_newline(); // }, in lists get a newline treatment
				} else if (prefix === 'SPACE') {
					output.space_before_token = true;
				}
				print_token();
				flags.last_word = current_token.text;

				if (current_token.type === 'TK_RESERVED') {
					if (current_token.text === 'do') {
						flags.do_block = true;
					} else if (current_token.text === 'if') {
						flags.if_block = true;
					} else if (current_token.text === 'import') {
						flags.import_block = true;
					} else if (flags.import_block && current_token.type === 'TK_RESERVED' && current_token.text === 'from') {
						flags.import_block = false;
					}
				}
			}

			function handle_semicolon() {
				if (start_of_statement()) {

					output.space_before_token = false;
				} else {
					handle_whitespace_and_comments(current_token);
				}

				var next_token = get_token(1);
				while (flags.mode === MODE.Statement &&
					!(flags.if_block && next_token && next_token.type === 'TK_RESERVED' && next_token.text === 'else') &&
					!flags.do_block) {
					restore_mode();
				}

				// hacky but effective for the moment
				if (flags.import_block) {
					flags.import_block = false;
				}
				print_token();
			}

			function handle_string() {
				if (start_of_statement()) {

					output.space_before_token = true;
				} else {
					handle_whitespace_and_comments(current_token);
					if (last_type === 'TK_RESERVED' || last_type === 'TK_WORD' || flags.inline_frame) {
						output.space_before_token = true;
					} else if (last_type === 'TK_COMMA' || last_type === 'TK_START_EXPR' || last_type === 'TK_EQUALS' || last_type === 'TK_OPERATOR') {
						if (!start_of_object_property()) {
							allow_wrap_or_preserved_newline();
						}
					} else {
						print_newline();
					}
				}
				print_token();
			}

			function handle_equals() {
				if (start_of_statement()) {
					// The conditional starts the statement if appropriate.
				} else {
					handle_whitespace_and_comments(current_token);
				}

				if (flags.declaration_statement) {
					// just got an '=' in a var-line, different formatting/line-breaking, etc will now be done
					flags.declaration_assignment = true;
				}
				output.space_before_token = true;
				print_token();
				output.space_before_token = true;
			}

			function handle_comma() {
				handle_whitespace_and_comments(current_token, true);

				print_token();
				output.space_before_token = true;
				if (flags.declaration_statement) {
					if (is_expression(flags.parent.mode)) {
						// do not break on comma, for(var a = 1, b = 2)
						flags.declaration_assignment = false;
					}

					if (flags.declaration_assignment) {
						flags.declaration_assignment = false;
						print_newline(false, true);
					} else if (opt.comma_first) {

						allow_wrap_or_preserved_newline();
					}
				} else if (flags.mode === MODE.ObjectLiteral ||
					(flags.mode === MODE.Statement && flags.parent.mode === MODE.ObjectLiteral)) {
					if (flags.mode === MODE.Statement) {
						restore_mode();
					}

					if (!flags.inline_frame) {
						print_newline();
					}
				} else if (opt.comma_first) {

					allow_wrap_or_preserved_newline();
				}
			}

			function handle_operator() {
				var isGeneratorAsterisk = current_token.text === '*' &&
					((last_type === 'TK_RESERVED' && in_array(flags.last_text, ['function', 'yield'])) ||
						(in_array(last_type, ['TK_START_BLOCK', 'TK_COMMA', 'TK_END_BLOCK', 'TK_SEMICOLON']))
					);
				var isUnary = in_array(current_token.text, ['-', '+']) && (
					in_array(last_type, ['TK_START_BLOCK', 'TK_START_EXPR', 'TK_EQUALS', 'TK_OPERATOR']) ||
					in_array(flags.last_text, Tokenizer.line_starters) ||
					flags.last_text === ','
				);

				if (start_of_statement()) {
					// The conditional starts the statement if appropriate.
				} else {
					var preserve_statement_flags = !isGeneratorAsterisk;
					handle_whitespace_and_comments(current_token, preserve_statement_flags);
				}

				if (last_type === 'TK_RESERVED' && is_special_word(flags.last_text)) {
					// "return" had a special handling in TK_WORD. Now we need to return the favor
					output.space_before_token = true;
					print_token();
					return;
				}

				// hack for actionscript's import .*;
				if (current_token.text === '*' && last_type === 'TK_DOT') {
					print_token();
					return;
				}

				if (current_token.text === '::') {
					// no spaces around exotic namespacing syntax operator
					print_token();
					return;
				}

				if (last_type === 'TK_OPERATOR' && in_array(opt.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)) {
					allow_wrap_or_preserved_newline();
				}

				if (current_token.text === ':' && flags.in_case) {
					flags.case_body = true;
					indent();
					print_token();
					print_newline();
					flags.in_case = false;
					return;
				}

				var space_before = true;
				var space_after = true;
				var in_ternary = false;
				if (current_token.text === ':') {
					if (flags.ternary_depth === 0) {
						// Colon is invalid javascript outside of ternary and object, but do our best to guess what was meant.
						space_before = false;
					} else {
						flags.ternary_depth -= 1;
						in_ternary = true;
					}
				} else if (current_token.text === '?') {
					flags.ternary_depth += 1;
				}

				// let's handle the operator_position option prior to any conflicting logic
				if (!isUnary && !isGeneratorAsterisk && opt.preserve_newlines && in_array(current_token.text, Tokenizer.positionable_operators)) {
					var isColon = current_token.text === ':';
					var isTernaryColon = (isColon && in_ternary);
					var isOtherColon = (isColon && !in_ternary);

					switch (opt.operator_position) {
					case OPERATOR_POSITION.before_newline:
						// if the current token is : and it's not a ternary statement then we set space_before to false
						output.space_before_token = !isOtherColon;

						print_token();

						if (!isColon || isTernaryColon) {
							allow_wrap_or_preserved_newline();
						}

						output.space_before_token = true;
						return;

					case OPERATOR_POSITION.after_newline:


						output.space_before_token = true;

						if (!isColon || isTernaryColon) {
							if (get_token(1).wanted_newline) {
								print_newline(false, true);
							} else {
								allow_wrap_or_preserved_newline();
							}
						} else {
							output.space_before_token = false;
						}

						print_token();

						output.space_before_token = true;
						return;

					case OPERATOR_POSITION.preserve_newline:
						if (!isOtherColon) {
							allow_wrap_or_preserved_newline();
						}


						space_before = !(output.just_added_newline() || isOtherColon);

						output.space_before_token = space_before;
						print_token();
						output.space_before_token = true;
						return;
					}
				}

				if (isGeneratorAsterisk) {
					allow_wrap_or_preserved_newline();
					space_before = false;
					var next_token = get_token(1);
					space_after = next_token && in_array(next_token.type, ['TK_WORD', 'TK_RESERVED']);
				} else if (current_token.text === '...') {
					allow_wrap_or_preserved_newline();
					space_before = last_type === 'TK_START_BLOCK';
					space_after = false;
				} else if (in_array(current_token.text, ['--', '++', '!', '~']) || isUnary) {
					// unary operators (and binary +/- pretending to be unary) special cases

					space_before = false;
					space_after = false;


					if (current_token.wanted_newline && (current_token.text === '--' || current_token.text === '++')) {
						print_newline(false, true);
					}

					if (flags.last_text === ';' && is_expression(flags.mode)) {
						// for (;; ++i)
						//        ^^^
						space_before = true;
					}

					if (last_type === 'TK_RESERVED') {
						space_before = true;
					} else if (last_type === 'TK_END_EXPR') {
						space_before = !(flags.last_text === ']' && (current_token.text === '--' || current_token.text === '++'));
					} else if (last_type === 'TK_OPERATOR') {

						space_before = in_array(current_token.text, ['--', '-', '++', '+']) && in_array(flags.last_text, ['--', '-', '++', '+']);

						if (in_array(current_token.text, ['+', '-']) && in_array(flags.last_text, ['--', '++'])) {
							space_after = true;
						}
					}


					if (((flags.mode === MODE.BlockStatement && !flags.inline_frame) || flags.mode === MODE.Statement) &&
						(flags.last_text === '{' || flags.last_text === ';')) {

						print_newline();
					}
				}

				output.space_before_token = output.space_before_token || space_before;
				print_token();
				output.space_before_token = space_after;
			}

			function handle_block_comment(preserve_statement_flags) {
				if (output.raw) {
					output.add_raw_token(current_token);
					if (current_token.directives && current_token.directives.preserve === 'end') {
						// If we're testing the raw output behavior, do not allow a directive to turn it off.
						output.raw = opt.test_output_raw;
					}
					return;
				}

				if (current_token.directives) {
					print_newline(false, preserve_statement_flags);
					print_token();
					if (current_token.directives.preserve === 'start') {
						output.raw = true;
					}
					print_newline(false, true);
					return;
				}

				// inline block
				if (!acorn.newline.test(current_token.text) && !current_token.wanted_newline) {
					output.space_before_token = true;
					print_token();
					output.space_before_token = true;
					return;
				}

				var lines = split_linebreaks(current_token.text);
				var j; // iterator for this case
				var javadoc = false;
				var starless = false;
				var lastIndent = current_token.whitespace_before;
				var lastIndentLength = lastIndent.length;

				// block comment starts with a new line
				print_newline(false, preserve_statement_flags);
				if (lines.length > 1) {
					javadoc = all_lines_start_with(lines.slice(1), '*');
					starless = each_line_matches_indent(lines.slice(1), lastIndent);
				}

				// first line always indented
				print_token(lines[0]);
				for (j = 1; j < lines.length; j++) {
					print_newline(false, true);
					if (javadoc) {
						// javadoc: reformat and re-indent
						print_token(' ' + ltrim(lines[j]));
					} else if (starless && lines[j].length > lastIndentLength) {
						// starless: re-indent non-empty content, avoiding trim
						print_token(lines[j].substring(lastIndentLength));
					} else {
						// normal comments output raw
						output.add_token(lines[j]);
					}
				}

				// for comments of more than one line, make sure there's a new line after
				print_newline(false, preserve_statement_flags);
			}

			function handle_comment(preserve_statement_flags) {
				if (current_token.wanted_newline) {
					print_newline(false, preserve_statement_flags);
				} else {
					output.trim(true);
				}

				output.space_before_token = true;
				print_token();
				print_newline(false, preserve_statement_flags);
			}

			function handle_dot() {
				if (start_of_statement()) {
					// The conditional starts the statement if appropriate.
				} else {
					handle_whitespace_and_comments(current_token, true);
				}

				if (last_type === 'TK_RESERVED' && is_special_word(flags.last_text)) {
					output.space_before_token = true;
				} else {

					allow_wrap_or_preserved_newline(flags.last_text === ')' && opt.break_chained_methods);
				}

				print_token();
			}

			function handle_unknown(preserve_statement_flags) {
				print_token();

				if (current_token.text[current_token.text.length - 1] === '\n') {
					print_newline(false, preserve_statement_flags);
				}
			}

			function handle_eof() {
				// Unwind any open statements
				while (flags.mode === MODE.Statement) {
					restore_mode();
				}
				handle_whitespace_and_comments(current_token);
			}
		}


		function OutputLine(parent) {
			var _character_count = 0;
			// use indent_count as a marker for lines that have preserved indentation
			var _indent_count = -1;

			var _items = [];
			var _empty = true;

			this.set_indent = function (level) {
				_character_count = parent.baseIndentLength + level * parent.indent_length;
				_indent_count = level;
			};

			this.get_character_count = function () {
				return _character_count;
			};

			this.is_empty = function () {
				return _empty;
			};

			this.last = function () {
				if (!this._empty) {
					return _items[_items.length - 1];
				} else {
					return null;
				}
			};

			this.push = function (input) {
				_items.push(input);
				_character_count += input.length;
				_empty = false;
			};

			this.pop = function () {
				var item = null;
				if (!_empty) {
					item = _items.pop();
					_character_count -= item.length;
					_empty = _items.length === 0;
				}
				return item;
			};

			this.remove_indent = function () {
				if (_indent_count > 0) {
					_indent_count -= 1;
					_character_count -= parent.indent_length;
				}
			};

			this.trim = function () {
				while (this.last() === ' ') {
					_items.pop();
					_character_count -= 1;
				}
				_empty = _items.length === 0;
			};

			this.toString = function () {
				var result = '';
				if (!this._empty) {
					if (_indent_count >= 0) {
						result = parent.indent_cache[_indent_count];
					}
					result += _items.join('');
				}
				return result;
			};
		}

		function Output(indent_string, baseIndentString) {
			baseIndentString = baseIndentString || '';
			this.indent_cache = [baseIndentString];
			this.baseIndentLength = baseIndentString.length;
			this.indent_length = indent_string.length;
			this.raw = false;

			var lines = [];
			this.baseIndentString = baseIndentString;
			this.indent_string = indent_string;
			this.previous_line = null;
			this.current_line = null;
			this.space_before_token = false;

			this.add_outputline = function () {
				this.previous_line = this.current_line;
				this.current_line = new OutputLine(this);
				lines.push(this.current_line);
			};

			// initialize
			this.add_outputline();


			this.get_line_number = function () {
				return lines.length;
			};

			// Using object instead of string to allow for later expansion of info about each line
			this.add_new_line = function (force_newline) {
				if (this.get_line_number() === 1 && this.just_added_newline()) {
					return false; // no newline on start of file
				}

				if (force_newline || !this.just_added_newline()) {
					if (!this.raw) {
						this.add_outputline();
					}
					return true;
				}

				return false;
			};

			this.get_code = function () {
				var sweet_code = lines.join('\n').replace(/[\r\n\t ]+$/, '');
				return sweet_code;
			};

			this.set_indent = function (level) {
				// Never indent your first output indent at the start of the file
				if (lines.length > 1) {
					while (level >= this.indent_cache.length) {
						this.indent_cache.push(this.indent_cache[this.indent_cache.length - 1] + this.indent_string);
					}

					this.current_line.set_indent(level);
					return true;
				}
				this.current_line.set_indent(0);
				return false;
			};

			this.add_raw_token = function (token) {
				for (var x = 0; x < token.newlines; x++) {
					this.add_outputline();
				}
				this.current_line.push(token.whitespace_before);
				this.current_line.push(token.text);
				this.space_before_token = false;
			};

			this.add_token = function (printable_token) {
				this.add_space_before_token();
				this.current_line.push(printable_token);
			};

			this.add_space_before_token = function () {
				if (this.space_before_token && !this.just_added_newline()) {
					this.current_line.push(' ');
				}
				this.space_before_token = false;
			};

			this.remove_redundant_indentation = function (frame) {


				if (frame.multiline_frame ||
					frame.mode === MODE.ForInitializer ||
					frame.mode === MODE.Conditional) {
					return;
				}

				// remove one indent from each line inside this section
				var index = frame.start_line_index;

				var output_length = lines.length;
				while (index < output_length) {
					lines[index].remove_indent();
					index++;
				}
			};

			this.trim = function (eat_newlines) {
				eat_newlines = (eat_newlines === undefined) ? false : eat_newlines;

				this.current_line.trim(indent_string, baseIndentString);

				while (eat_newlines && lines.length > 1 &&
					this.current_line.is_empty()) {
					lines.pop();
					this.current_line = lines[lines.length - 1];
					this.current_line.trim();
				}

				this.previous_line = lines.length > 1 ? lines[lines.length - 2] : null;
			};

			this.just_added_newline = function () {
				return this.current_line.is_empty();
			};

			this.just_added_blankline = function () {
				if (this.just_added_newline()) {
					if (lines.length === 1) {
						return true; // start of the file and newline = blank
					}

					var line = lines[lines.length - 2];
					return line.is_empty();
				}
				return false;
			};
		}

		var InputScanner = function (input) {
			var _input = input;
			var _input_length = _input.length;
			var _position = 0;

			this.back = function () {
				_position -= 1;
			};

			this.hasNext = function () {
				return _position < _input_length;
			};

			this.next = function () {
				var val = null;
				if (this.hasNext()) {
					val = _input.charAt(_position);
					_position += 1;
				}
				return val;
			};

			this.peek = function (index) {
				var val = null;
				index = index || 0;
				index += _position;
				if (index >= 0 && index < _input_length) {
					val = _input.charAt(index);
				}
				return val;
			};

			this.peekCharCode = function (index) {
				var val = 0;
				index = index || 0;
				index += _position;
				if (index >= 0 && index < _input_length) {
					val = _input.charCodeAt(index);
				}
				return val;
			};

			this.test = function (pattern, index) {
				index = index || 0;
				pattern.lastIndex = _position + index;
				return pattern.test(_input);
			};

			this.testChar = function (pattern, index) {
				var val = this.peek(index);
				return val !== null && pattern.test(val);
			};

			this.match = function (pattern) {
				pattern.lastIndex = _position;
				var pattern_match = pattern.exec(_input);
				if (pattern_match && pattern_match.index === _position) {
					_position += pattern_match[0].length;
				} else {
					pattern_match = null;
				}
				return pattern_match;
			};
		};

		var Token = function (type, text, newlines, whitespace_before, parent) {
			this.type = type;
			this.text = text;


			this.comments_before = /* inline comment*/ [];


			this.comments_after = []; // no new line before and newline after
			this.newlines = newlines || 0;
			this.wanted_newline = newlines > 0;
			this.whitespace_before = whitespace_before || '';
			this.parent = parent || null;
			this.opened = null;
			this.directives = null;
		};

		function tokenizer(input_string, opts) {

			var whitespace = "\n\r\t ".split('');
			var digit = /[0-9]/;
			var digit_bin = /[01]/;
			var digit_oct = /[01234567]/;
			var digit_hex = /[0123456789abcdefABCDEF]/;

			this.positionable_operators = '!= !== % & && * ** + - / : < << <= == === > >= >> >>> ? ^ | ||'.split(' ');
			var punct = this.positionable_operators.concat(
				// non-positionable operators - these do not follow operator position settings
				'! %= &= *= **= ++ += , -- -= /= :: <<= = => >>= >>>= ^= |= ~ ...'.split(' '));

			// words which should always start on new line.
			this.line_starters = 'continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export'.split(',');
			var reserved_words = this.line_starters.concat(['do', 'in', 'of', 'else', 'get', 'set', 'new', 'catch', 'finally', 'typeof', 'yield', 'async', 'await', 'from', 'as']);

			//  /* ... */ comment ends with nearest */ or end of file
			var block_comment_pattern = /([\s\S]*?)((?:\*\/)|$)/g;

			// comment ends just before nearest linefeed or end of file
			var comment_pattern = /([^\n\r\u2028\u2029]*)/g;

			var directives_block_pattern = /\/\* beautify( \w+[:]\w+)+ \*\//g;
			var directive_pattern = / (\w+)[:](\w+)/g;
			var directives_end_ignore_pattern = /([\s\S]*?)((?:\/\*\sbeautify\signore:end\s\*\/)|$)/g;

			var template_pattern = /((<\?php|<\?=)[\s\S]*?\?>)|(<%[\s\S]*?%>)/g;

			var n_newlines, whitespace_before_token, in_html_comment, tokens;
			var input;

			this.tokenize = function () {
				input = new InputScanner(input_string);
				in_html_comment = false;
				tokens = [];

				var next, last;
				var token_values;
				var open = null;
				var open_stack = [];
				var comments = [];

				while (!(last && last.type === 'TK_EOF')) {
					token_values = tokenize_next();
					next = new Token(token_values[1], token_values[0], n_newlines, whitespace_before_token);
					while (next.type === 'TK_COMMENT' || next.type === 'TK_BLOCK_COMMENT' || next.type === 'TK_UNKNOWN') {
						if (next.type === 'TK_BLOCK_COMMENT') {
							next.directives = token_values[2];
						}
						comments.push(next);
						token_values = tokenize_next();
						next = new Token(token_values[1], token_values[0], n_newlines, whitespace_before_token);
					}

					if (comments.length) {
						next.comments_before = comments;
						comments = [];
					}

					if (next.type === 'TK_START_BLOCK' || next.type === 'TK_START_EXPR') {
						next.parent = last;
						open_stack.push(open);
						open = next;
					} else if ((next.type === 'TK_END_BLOCK' || next.type === 'TK_END_EXPR') &&
						(open && (
							(next.text === ']' && open.text === '[') ||
							(next.text === ')' && open.text === '(') ||
							(next.text === '}' && open.text === '{')))) {
						next.parent = open.parent;
						next.opened = open;

						open = open_stack.pop();
					}

					tokens.push(next);
					last = next;
				}

				return tokens;
			};

			function get_directives(text) {
				if (!text.match(directives_block_pattern)) {
					return null;
				}

				var directives = {};
				directive_pattern.lastIndex = 0;
				var directive_match = directive_pattern.exec(text);

				while (directive_match) {
					directives[directive_match[1]] = directive_match[2];
					directive_match = directive_pattern.exec(text);
				}

				return directives;
			}

			function tokenize_next() {
				var resulting_string;
				var whitespace_on_this_line = [];

				n_newlines = 0;
				whitespace_before_token = '';

				var c = input.next();

				if (c === null) {
					return ['', 'TK_EOF'];
				}

				var last_token;
				if (tokens.length) {
					last_token = tokens[tokens.length - 1];
				} else {
					// For the sake of tokenizing we can pretend that there was on open brace to start
					last_token = new Token('TK_START_BLOCK', '{');
				}

				while (in_array(c, whitespace)) {

					if (acorn.newline.test(c)) {
						if (!(c === '\n' && input.peek(-2) === '\r')) {
							n_newlines += 1;
							whitespace_on_this_line = [];
						}
					} else {
						whitespace_on_this_line.push(c);
					}

					c = input.next();

					if (c === null) {
						return ['', 'TK_EOF'];
					}
				}

				if (whitespace_on_this_line.length) {
					whitespace_before_token = whitespace_on_this_line.join('');
				}

				if (digit.test(c) || (c === '.' && input.testChar(digit))) {
					var allow_decimal = true;
					var allow_e = true;
					var local_digit = digit;

					if (c === '0' && input.testChar(/[XxOoBb]/)) {
						// switch to hex/oct/bin number, no decimal or e, just hex/oct/bin digits
						allow_decimal = false;
						allow_e = false;
						if (input.testChar(/[Bb]/)) {
							local_digit = digit_bin;
						} else if (input.testChar(/[Oo]/)) {
							local_digit = digit_oct;
						} else {
							local_digit = digit_hex;
						}
						c += input.next();
					} else if (c === '.') {
						// Already have a decimal for this literal, don't allow another
						allow_decimal = false;
					} else {
						// we know this first loop will run.  It keeps the logic simpler.
						c = '';
						input.back();
					}

					// Add the digits
					while (input.testChar(local_digit)) {
						c += input.next();

						if (allow_decimal && input.peek() === '.') {
							c += input.next();
							allow_decimal = false;
						}

						// a = 1.e-7 is valid, so we test for . then e in one loop
						if (allow_e && input.testChar(/[Ee]/)) {
							c += input.next();

							if (input.testChar(/[+-]/)) {
								c += input.next();
							}

							allow_e = false;
							allow_decimal = false;
						}
					}

					return [c, 'TK_WORD'];
				}

				if (acorn.isIdentifierStart(input.peekCharCode(-1))) {
					if (input.hasNext()) {
						while (acorn.isIdentifierChar(input.peekCharCode())) {
							c += input.next();
							if (!input.hasNext()) {
								break;
							}
						}
					}

					if (!(last_token.type === 'TK_DOT' ||
							(last_token.type === 'TK_RESERVED' && in_array(last_token.text, ['set', 'get']))) &&
						in_array(c, reserved_words)) {
						if (c === 'in' || c === 'of') { // hack for 'in' and 'of' operators
							return [c, 'TK_OPERATOR'];
						}
						return [c, 'TK_RESERVED'];
					}

					return [c, 'TK_WORD'];
				}

				if (c === '(' || c === '[') {
					return [c, 'TK_START_EXPR'];
				}

				if (c === ')' || c === ']') {
					return [c, 'TK_END_EXPR'];
				}

				if (c === '{') {
					return [c, 'TK_START_BLOCK'];
				}

				if (c === '}') {
					return [c, 'TK_END_BLOCK'];
				}

				if (c === ';') {
					return [c, 'TK_SEMICOLON'];
				}

				if (c === '/') {
					var comment = '';
					var comment_match;
					// peek for comment /* ... */
					if (input.peek() === '*') {
						input.next();
						comment_match = input.match(block_comment_pattern);
						comment = '/*' + comment_match[0];
						var directives = get_directives(comment);
						if (directives && directives.ignore === 'start') {
							comment_match = input.match(directives_end_ignore_pattern);
							comment += comment_match[0];
						}
						comment = comment.replace(acorn.allLineBreaks, '\n');
						return [comment, 'TK_BLOCK_COMMENT', directives];
					}
					// peek for comment // ...
					if (input.peek() === '/') {
						input.next();
						comment_match = input.match(comment_pattern);
						comment = '//' + comment_match[0];
						return [comment, 'TK_COMMENT'];
					}

				}

				var startXmlRegExp = /<()([-a-zA-Z:0-9_.]+|{[\s\S]+?}|!\[CDATA\[[\s\S]*?\]\])(\s+{[\s\S]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{[\s\S]+?}))*\s*(\/?)\s*>/g;

				if (c === '`' || c === "'" || c === '"' || // string
					(
						(c === '/') || // regexp
						(opts.e4x && c === "<" && input.test(startXmlRegExp, -1)) // xml
					) && ( // regex and xml can only appear in specific locations during parsing
						(last_token.type === 'TK_RESERVED' && in_array(last_token.text, ['return', 'case', 'throw', 'else', 'do', 'typeof', 'yield'])) ||
						(last_token.type === 'TK_END_EXPR' && last_token.text === ')' &&
							last_token.parent && last_token.parent.type === 'TK_RESERVED' && in_array(last_token.parent.text, ['if', 'while', 'for'])) ||
						(in_array(last_token.type, ['TK_COMMENT', 'TK_START_EXPR', 'TK_START_BLOCK',
							'TK_END_BLOCK', 'TK_OPERATOR', 'TK_EQUALS', 'TK_EOF', 'TK_SEMICOLON', 'TK_COMMA'
						]))
					)) {

					var sep = c,
						esc = false,
						has_char_escapes = false;

					resulting_string = c;

					if (sep === '/') {

						var in_char_class = false;
						while (input.hasNext() &&
							((esc || in_char_class || input.peek() !== sep) &&
								!input.testChar(acorn.newline))) {
							resulting_string += input.peek();
							if (!esc) {
								esc = input.peek() === '\\';
								if (input.peek() === '[') {
									in_char_class = true;
								} else if (input.peek() === ']') {
									in_char_class = false;
								}
							} else {
								esc = false;
							}
							input.next();
						}
					} else if (opts.e4x && sep === '<') {


						var xmlRegExp = /[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[\s\S]+?}|!\[CDATA\[[\s\S]*?\]\])(\s+{[\s\S]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{[\s\S]+?}))*\s*(\/?)\s*>/g;
						input.back();
						var xmlStr = '';
						var match = input.match(startXmlRegExp);
						if (match) {
							// Trim root tag to attempt to
							var rootTag = match[2].replace(/^{\s+/, '{').replace(/\s+}$/, '}');
							var isCurlyRoot = rootTag.indexOf('{') === 0;
							var depth = 0;
							while (match) {
								var isEndTag = !!match[1];
								var tagName = match[2];
								var isSingletonTag = (!!match[match.length - 1]) || (tagName.slice(0, 8) === "![CDATA[");
								if (!isSingletonTag &&
									(tagName === rootTag || (isCurlyRoot && tagName.replace(/^{\s+/, '{').replace(/\s+}$/, '}')))) {
									if (isEndTag) {
										--depth;
									} else {
										++depth;
									}
								}
								xmlStr += match[0];
								if (depth <= 0) {
									break;
								}
								match = input.match(xmlRegExp);
							}
							// if we didn't close correctly, keep unformatted.
							if (!match) {
								xmlStr += input.match(/[\s\S]*/g)[0];
							}
							xmlStr = xmlStr.replace(acorn.allLineBreaks, '\n');
							return [xmlStr, "TK_STRING"];
						}
					} else {

						var parse_string = function (delimiter, allow_unescaped_newlines, start_sub) {

							var current_char;
							while (input.hasNext()) {
								current_char = input.peek();
								if (!(esc || (current_char !== delimiter &&
										(allow_unescaped_newlines || !acorn.newline.test(current_char))))) {
									break;
								}

								// Handle \r\n linebreaks after escapes or in template strings
								if ((esc || allow_unescaped_newlines) && acorn.newline.test(current_char)) {
									if (current_char === '\r' && input.peek(1) === '\n') {
										input.next();
										current_char = input.peek();
									}
									resulting_string += '\n';
								} else {
									resulting_string += current_char;
								}

								if (esc) {
									if (current_char === 'x' || current_char === 'u') {
										has_char_escapes = true;
									}
									esc = false;
								} else {
									esc = current_char === '\\';
								}

								input.next();

								if (start_sub && resulting_string.indexOf(start_sub, resulting_string.length - start_sub.length) !== -1) {
									if (delimiter === '`') {
										parse_string('}', allow_unescaped_newlines, '`');
									} else {
										parse_string('`', allow_unescaped_newlines, '${');
									}

									if (input.hasNext()) {
										resulting_string += input.next();
									}
								}
							}
						};

						if (sep === '`') {
							parse_string('`', true, '${');
						} else {
							parse_string(sep);
						}
					}

					if (has_char_escapes && opts.unescape_strings) {
						resulting_string = unescape_string(resulting_string);
					}

					if (input.peek() === sep) {
						resulting_string += sep;
						input.next();

						if (sep === '/') {

							while (input.hasNext() && acorn.isIdentifierStart(input.peekCharCode())) {
								resulting_string += input.next();
							}
						}
					}
					return [resulting_string, 'TK_STRING'];
				}

				if (c === '#') {

					if (tokens.length === 0 && input.peek() === '!') {
						// shebang
						resulting_string = c;
						while (input.hasNext() && c !== '\n') {
							c = input.next();
							resulting_string += c;
						}
						return [trim(resulting_string) + '\n', 'TK_UNKNOWN'];
					}

					var sharp = '#';
					if (input.hasNext() && input.testChar(digit)) {
						do {
							c = input.next();
							sharp += c;
						} while (input.hasNext() && c !== '#' && c !== '=');
						if (c === '#') {
							//
						} else if (input.peek() === '[' && input.peek(1) === ']') {
							sharp += '[]';
							input.next();
							input.next();
						} else if (input.peek() === '{' && input.peek(1) === '}') {
							sharp += '{}';
							input.next();
							input.next();
						}
						return [sharp, 'TK_WORD'];
					}
				}

				if (c === '<' && (input.peek() === '?' || input.peek() === '%')) {
					input.back();
					var template_match = input.match(template_pattern);
					if (template_match) {
						c = template_match[0];
						c = c.replace(acorn.allLineBreaks, '\n');
						return [c, 'TK_STRING'];
					}
				}

				if (c === '<' && input.match(/\!--/g)) {
					c = '<!--';
					while (input.hasNext() && !input.testChar(acorn.newline)) {
						c += input.next();
					}
					in_html_comment = true;
					return [c, 'TK_COMMENT'];
				}

				if (c === '-' && in_html_comment && input.match(/->/g)) {
					in_html_comment = false;
					return ['-->', 'TK_COMMENT'];
				}

				if (c === '.') {
					if (input.peek() === '.' && input.peek(1) === '.') {
						c += input.next() + input.next();
						return [c, 'TK_OPERATOR'];
					}
					return [c, 'TK_DOT'];
				}

				if (in_array(c, punct)) {
					while (input.hasNext() && in_array(c + input.peek(), punct)) {
						c += input.next();
						if (!input.hasNext()) {
							break;
						}
					}

					if (c === ',') {
						return [c, 'TK_COMMA'];
					} else if (c === '=') {
						return [c, 'TK_EQUALS'];
					} else {
						return [c, 'TK_OPERATOR'];
					}
				}

				return [c, 'TK_UNKNOWN'];
			}


			function unescape_string(s) {

				var out = '',
					escaped = 0;

				var input_scan = new InputScanner(s);
				var matched = null;

				while (input_scan.hasNext()) {

					matched = input_scan.match(/([\s]|[^\\]|\\\\)+/g);

					if (matched) {
						out += matched[0];
					}

					if (input_scan.peek() === '\\') {
						input_scan.next();
						if (input_scan.peek() === 'x') {
							matched = input_scan.match(/x([0-9A-Fa-f]{2})/g);
						} else if (input_scan.peek() === 'u') {
							matched = input_scan.match(/u([0-9A-Fa-f]{4})/g);
						} else {
							out += '\\';
							if (input_scan.hasNext()) {
								out += input_scan.next();
							}
							continue;
						}

						// If there's some error decoding, return the original string
						if (!matched) {
							return s;
						}

						escaped = parseInt(matched[1], 16);

						if (escaped > 0x7e && escaped <= 0xff && matched[0].indexOf('x') === 0) {

							return s;
						} else if (escaped >= 0x00 && escaped < 0x20) {
							// leave 0x00...0x1f escaped
							out += '\\' + matched[0];
							continue;
						} else if (escaped === 0x22 || escaped === 0x27 || escaped === 0x5c) {
							// single-quote, apostrophe, backslash - escape these
							out += '\\' + String.fromCharCode(escaped);
						} else {
							out += String.fromCharCode(escaped);
						}
					}
				}

				return out;
			}
		}

		var beautifier = new Beautifier(js_source_text, options);
		return beautifier.beautify();

	}
})(this);