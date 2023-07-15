import React from "react";
import "./styles.css";
import M3ElevatedButton from "material/react/M3ElevatedButton";
import FilledButton from "material/react/M3FilledButton";
import OutlinedButton from "material/react/M3OutlinedButton";
import TextButton from "material/react/M3TextButton";
import TonalButton from "material/react/M3TonalButton";
import Fab from "material/react/M3Fab";
import M3FilledField from "material/react/M3FilledField";
import M3OutlinedField from "material/react/M3OutlinedField";
import M3StandardIconButton from "material/react/M3StandardIconButton";
import M3OutlinedIconButton from "material/react/M3OutlinedIconButton";
import M3FilledIconButton from "material/react/M3FilledIconButton";
import M3FilledTonalIconButton from "material/react/M3FilledTonalIconButton";
import M3Checkbox from "material/react/M3Checkbox";
import M3Switch from "material/react/M3Switch";
import M3Radio from "material/react/M3Radio";
import M3AssistChip from "material/react/M3AssistChip";
import M3SuggestionChip from "material/react/M3SuggestionChip";
import M3FilterChip from "material/react/M3FilterChip";
import M3InputChip from "material/react/M3InputChip";
import M3OutlinedSelect from "material/react/M3OutlinedSelect";
import M3FilledSelect from "material/react/M3FilledSelect";
import M3SelectOption from "material/react/M3SelectOption";
import M3LinearProgress from "material/react/M3LinearProgress";
import M3CircularProgress from "material/react/M3CircularProgress";
import M3Divider from "material/react/M3Divider";
import M3List from "material/react/M3List";
import M3ListItem from "material/react/M3ListItem";
import M3Menu from "material/react/M3Menu";
import M3MenuItem from "material/react/M3MenuItem";
import M3Slider from "material/react/M3Slider";
import M3Tabs from "material/react/M3Tabs";
import M3Tab from "material/react/M3Tab";
import Picker from "./colors/picker";
import M3FilledTextField from "./material/react/M3FilledTextField";
import M3OutlinedTextField from "./material/react/M3OutlinedTextField";

export default function App() {
  const ancorRef = React.useRef(null);
  const menuRef = React.createRef<any>();
  const [selected,setSelected] = React.useState(true);
  React.useEffect(()=>{
      // fetch("https://kedo1.tst.ecm.citros.ru/alfresco/s/api/kedo/mobile/login", {headers:{"Content-Type":"application/json"},method:"POST",body:'{"username":"admin","password":"admin"}'}).then(res=>{
      //     console.log(res)
      // }).catch(e=>{
      //     console.log(e)
      // })
      // fetch("http://192.168.1.3:60913/realms/pny-web/protocol/openid-connect/token", {headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",body:'client_id=pny&grant_type=password&username=test&password=test&scope=offline_access'}).then(res=>{
      //     res.json().then(res=>{
      //         console.log(res);
      //     })
      // });
  },[])
  return (
    <div className="App">
      <div style={{flex:'1 0 100%',display:"flex"}}>
        <Picker colorName={"primaryColor"}/>
        <Picker colorName={"secondaryColor"}/>
        <Picker colorName={"tertiaryColor"}/>
        <Picker colorName={"neutralColor"}/>
        <Picker colorName={"neutralVariantColor"}/>
      </div>
      <M3ElevatedButton>Text</M3ElevatedButton>
      <M3ElevatedButton icon="edit">Text</M3ElevatedButton>
      <M3ElevatedButton icon="edit" trailingIcon>
        Text
      </M3ElevatedButton>
      <FilledButton>Test</FilledButton>
      <FilledButton icon="edit">Test</FilledButton>
      <FilledButton icon="edit" trailingIcon>
        Test
      </FilledButton>
      <OutlinedButton icon="edit">Test</OutlinedButton>
      <OutlinedButton>Test</OutlinedButton>
      <OutlinedButton icon="edit" trailingIcon>
        Test
      </OutlinedButton>
      <TextButton>Test</TextButton>
      <TextButton icon="edit">Test</TextButton>
      <TextButton icon="edit" trailingIcon>
        Test
      </TextButton>
      <TonalButton>Test</TonalButton>
      <TonalButton icon="edit">Test</TonalButton>
      <TonalButton icon="edit" trailingIcon>
        Test
      </TonalButton>
      <Fab icon="add" size="small" lowered />
      <Fab icon="add" size="small" />
      <Fab icon="add" lowered />
      <Fab icon="add" />
      <Fab icon="add" size="large" lowered />
      <Fab icon="add" size="large" />
      <Fab icon="add" variant="primary" />
      <Fab icon="add" variant="secondary" />
      <Fab icon="add" variant="tertiary" />
      <M3FilledField />
      <M3FilledField disabled />
      <M3FilledField startIcon="edit" />
      <M3FilledField endIcon="edit" />
      <M3FilledField label="test" />
      <M3FilledField label="test" startIcon="edit" />
      <M3FilledField label="test" endIcon="edit" />
      <M3FilledField label="test" supportingText="supporting text" />
      <M3FilledField
        label="test"
        supportingText="supporting text"
        startIcon="search"
        endIcon="close"
      />
      <M3OutlinedField />
      <M3OutlinedField disabled />
      <M3OutlinedField startIcon="edit" />
      <M3OutlinedField endIcon="edit" />
      <M3OutlinedField label="test" />
      <M3OutlinedField label="test" startIcon="edit" />
      <M3OutlinedField label="test" endIcon="edit" />
      <M3OutlinedField label="test" supportingText="supporting text" />
      <M3OutlinedField
        label="test"
        supportingText="supporting text"
        startIcon="edit"
        endIcon="edit"
      />
      <M3StandardIconButton icon="edit" />
      <M3StandardIconButton toggle icon="edit" />
      <M3StandardIconButton toggle icon="left_panel_open" selectedIcon="left_panel_close" />
      <M3StandardIconButton disabled icon="edit" />
      <M3OutlinedIconButton icon="add" />
      <M3OutlinedIconButton toggle icon="add" />
      <M3OutlinedIconButton toggle selected={selected} onClick={()=>{console.log("1");setSelected(p=>!p)}} icon="left_panel_open" selectedIcon="left_panel_close" />
      <M3OutlinedIconButton disabled icon="add" />
      <M3FilledIconButton icon="edit" />
      <M3FilledIconButton toggle icon="edit" />
      <M3FilledIconButton toggle icon="left_panel_open" selectedIcon="left_panel_close" />
      <M3FilledIconButton disabled icon="edit" />
      <M3FilledTonalIconButton icon="add" />
      <M3FilledTonalIconButton toggle icon="add" />
      <M3FilledTonalIconButton toggle icon="left_panel_open" selectedIcon="left_panel_close" />
      <M3FilledTonalIconButton disabled icon="add" />
      <M3Checkbox />
      <M3Checkbox checked />
      <M3Checkbox indeterminate />
      <M3Switch />
      <M3Switch selected />
      <M3Switch selected showIcon />
      <M3Radio />
      <M3Radio checked />
      <M3Radio disabled />
      <M3Radio checked disabled />
      <M3AssistChip label="text" />
      <M3AssistChip label="text" disabled />
      <M3AssistChip label="text" elevated />
      <M3AssistChip label="text" elevated disabled />
      <M3AssistChip label="text" icon="edit" />
      <M3AssistChip label="text" icon="edit" disabled />
      <M3AssistChip label="text" elevated icon="edit" />
      <M3AssistChip label="text" elevated icon="edit" disabled />
      <M3SuggestionChip label="text" />
      <M3SuggestionChip label="text" disabled />
      <M3SuggestionChip label="text" elevated />
      <M3SuggestionChip label="text" elevated disabled />
      <M3SuggestionChip label="text" icon="edit" />
      <M3SuggestionChip label="text" icon="edit" disabled />
      <M3SuggestionChip label="text" elevated icon="edit" />
      <M3SuggestionChip label="text" elevated icon="edit" disabled />
      <M3FilterChip label="text" />
      <M3FilterChip label="text" disabled />
      <M3FilterChip label="text" elevated />
      <M3FilterChip label="text" elevated disabled />
      <M3FilterChip label="text" icon="edit" />
      <M3FilterChip label="text" icon="edit" disabled />
      <M3FilterChip label="text" elevated icon="edit" />
      <M3FilterChip label="text" elevated icon="edit" disabled />
      <M3InputChip label="text" />
      <M3InputChip label="text" disabled />
      <M3InputChip label="text" icon="edit" />
      <M3InputChip label="text" icon="edit" disabled />
      <M3OutlinedSelect>
        <M3SelectOption headline="test1" />
        <M3SelectOption headline="test2" />
      </M3OutlinedSelect>
      <M3OutlinedSelect disabled>
        <M3SelectOption headline="test1" />
        <M3SelectOption headline="test2" />
      </M3OutlinedSelect>
      <M3FilledSelect>
        <M3SelectOption headline="test1" />
        <M3SelectOption headline="test2" />
      </M3FilledSelect>
      <M3FilledSelect disabled>
        <M3SelectOption headline="test1" />
        <M3SelectOption headline="test2" />
      </M3FilledSelect>
      <M3LinearProgress progress={0.4} />
      <M3LinearProgress indeterminate />
      <M3CircularProgress style={{width:50,height:50}} progress={0.7} />
      <M3CircularProgress style={{width:50,height:50}} indeterminate />
      <M3Divider />
      <M3Divider inset />
      <M3Divider insetStart />
      <M3Divider insetEnd />
      <M3List>
        <M3ListItem iconStart="edit" />
        <M3ListItem disabled headline="headline disabled" iconStart="edit" />
        <M3ListItem
          noninteractive
          headline="headline noninteractive"
          supportingText="supportingText"
          iconStart="edit"
        />
        <M3ListItem
          headline="headline"
          supportingText="supportingText supportingText supportingText supportingText supportingText supportingText supportingText "
          iconStart="edit"
          trailingSupportingText="trailingSupportingText"
        />
        <M3ListItem
          headline="headline"
          supportingText="supportingText supportingText supportingText supportingText supportingText supportingText supportingText"
          multiLineSupportingText
          iconStart="edit"
          trailingSupportingText="trailingSupportingText"
        />
        <M3ListItem
          headline="headline"
          supportingText="supportingText"
          iconStart="edit"
          iconEnd="chevron_right"
        />
      </M3List>
      <div style={{ position: "absolute" }} ref={ancorRef}></div>
      <FilledButton
        onClick={() => {
          if(menuRef.current) menuRef.current.show();
        }}
      >
        Open menu
      </FilledButton>
      <M3Menu ref={menuRef} ancorRef={ancorRef}>
        <M3MenuItem headline="test1" trailingSupportingText="100" />
        <M3MenuItem headline="test2" disabled />
        <M3MenuItem headline="test3" iconEnd="add" />
      </M3Menu>
      <M3Slider step={1} min={0} max={10} value={5} />
      <M3Slider step={1} min={0} max={10} value={5} labeled />
      <M3Slider step={1} min={0} max={10} value={5} ticks />
      <M3Slider step={1} min={0} max={10} value={5} ticks labeled />
      <M3Slider step={1} min={0} max={10} value={5} disabled />
      <M3Slider step={1} min={0} max={10} valueStart={2} valueEnd={5} range />
      <M3Slider
        step={1}
        min={0}
        max={10}
        valueStart={2}
        valueEnd={5}
        range
        labeled
      />
      <M3Slider
        step={1}
        min={0}
        max={10}
        valueStart={2}
        valueEnd={5}
        range
        ticks
      />
      <M3Slider
        step={1}
        min={0}
        max={10}
        valueStart={2}
        valueEnd={5}
        range
        ticks
        labeled
      />
      <M3Slider
        step={1}
        min={0}
        max={10}
        valueStart={2}
        valueEnd={5}
        range
        disabled
      />
      <M3Tabs>
        <M3Tab icon="edit" inlineIcon>
          Test1
        </M3Tab>
        <M3Tab icon="edit">Test2</M3Tab>
        <M3Tab>Test3</M3Tab>
        <M3Tab>Test4</M3Tab>
        <M3Tab>Test5</M3Tab>
      </M3Tabs>
      <M3FilledTextField label={"label"}/>
      <M3OutlinedTextField label={"label"}/>
    </div>
  );
}
