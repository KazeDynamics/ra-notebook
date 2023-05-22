import { c as create_ssr_component, q as createEventDispatcher, j as each, h as add_attribute, e as escape, v as validate_component } from "./index3.js";
import { M as Modal } from "./Modal.js";
import "./functions.js";
import { I as Icon } from "./Icon.js";
const label = "modal1";
const Checklist = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let modalOpen;
  function openModal() {
    const modalShown = localStorage.getItem(`${item.id}_modalShown`);
    if (modalShown !== "true") {
      modalOpen = true;
      localStorage.setItem(`${item.id}_modalShown`, "true");
    }
  }
  const dispatch = createEventDispatcher();
  let { tasks = [] } = $$props;
  let { item } = $$props;
  let completedPercentage = 0;
  function getSavedState(task) {
    if (typeof localStorage !== "undefined") {
      const savedState = localStorage.getItem(`${item.id}_${task.name}`);
      if (savedState !== null) {
        task.completed = savedState === "true";
      }
    }
  }
  function updateCompletedPercentage() {
    let completedTasks = 0;
    tasks.forEach((task) => {
      getSavedState(task);
      if (task.completed) {
        completedTasks++;
      }
    });
    completedPercentage = completedTasks / tasks.length * 100;
    if (completedPercentage === 100) {
      openModal();
    }
  }
  if ($$props.tasks === void 0 && $$bindings.tasks && tasks !== void 0)
    $$bindings.tasks(tasks);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  {
    updateCompletedPercentage();
  }
  {
    dispatch("update", tasks);
  }
  return `<div class="overflow-x-auto"><table class="table w-full"><thead><tr><th></th>
				<th class="whitespace-nowrap">Task</th>
				<th class="whitespace-nowrap">Status</th></tr></thead>
		<tbody>${each(tasks, (task) => {
    return `<tr class="md:table-row overflow-x-auto"><td class="md:table-cell"><input type="checkbox" class="checkbox checkbox-success"${add_attribute("checked", task.completed, 1)}></td>
					<td class="md:table-cell whitespace-normal">${escape(task.name)}</td>
					<td>${task.completed ? `<span class="badge badge-success gap-2">Completed</span>` : `<span class="badge badge-info gap-2">In Progress</span>`}</td>
				</tr>`;
  })}</tbody></table></div>

<div class="relative pt-1"><div class="flex mb-2 items-center justify-between"><div><span class="${"text-xs font-semibold inline-block py-1 px-2 uppercase rounded " + escape(
    completedPercentage === 100 ? "text-green-500 bg-green-100" : "text-blue-600 bg-blue-200",
    true
  )}">${escape(completedPercentage === 100 ? "Completed" : "Progress")}</span></div>
		<div class="text-right"><span class="${"text-xs font-semibold inline-block " + escape(
    completedPercentage === 100 ? "text-success" : "text-blue-600",
    true
  )}">${escape(completedPercentage.toFixed(0))}%
			</span></div></div>
	<div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200"><div class="${escape(
    completedPercentage === 100 ? "bg-green-600" : "bg-blue-600",
    true
  ) + " w-0 transition-all duration-500"}"${add_attribute("style", `width: ${completedPercentage}%;`, 0)}></div></div></div>

${validate_component(Modal, "Modal").$$render($$result, { label, checked: modalOpen }, {}, {
    actions: () => {
      return `<div slot="actions" class="flex w-full items-center justify-center space-x-2"><form method="POST" action="?/updateItem"><input type="hidden" name="id"${add_attribute("value", item.id, 0)}>
			<button type="submit" class="btn btn-success" ${""}>Complete</button></form>
		<form action="?/deleteItem" method="POST"><input type="hidden" name="id"${add_attribute("value", item.id, 0)}>
			<button type="submit" class="btn btn-outline bg-error text-white" ${""}>Delete</button></form></div>`;
    },
    heading: () => {
      return `<div slot="heading"><h3 class="text-2xl">Congratulations!</h3>
		<p class="text-base font-normal mt-2">You&#39;ve completed all the tasks for <b>${escape(item.name)}</b></p></div>`;
    }
  })}`;
});
const MyItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  let modalOpen;
  let showCheckIcon = false;
  const tasksGuaPS = [
    {
      name: "PODER DE REPRESENTACIÓN LEGAL  1",
      completed: false
    },
    {
      name: "PODER DE REPRESENTACIÓN REGULATORIA",
      completed: false
    },
    {
      name: "CERTIFICADO DE LIBRE VENTA DEL PAÍS DE ORIGEN APOSTILLADO DIGITAL",
      completed: false
    },
    {
      name: "ISO 13485 APOSTILLADO DIGITAL (EN CASO DE NO TENER CFG)",
      completed: false
    },
    {
      name: "INSTRUCCIONES DE USO (DFU)",
      completed: false
    },
    {
      name: "ESPECIFICACIONES DEL PRODUCTO TERMINADO (PIF)",
      completed: false
    },
    {
      name: "EMPAQUE PRIMARIO Y SECUNDARIO (PIF)",
      completed: false
    },
    {
      name: "LITERATURA TÉCNICA DEL PRODUCTO (CATALOGO, INSERTO) CUANDO APLIQUE  (PIF)",
      completed: false
    },
    {
      name: "CERTIFICADO DE CONTROL DE CALIDAD EMITIDA POR EL LABORATORIO FABRICANTE (CoA)",
      completed: false
    },
    {
      name: "ETIQUETADO (CARTON & POUCH)",
      completed: false
    }
  ];
  const tasksGuaPR = [
    {
      name: "PODER DE REPRESENTACIÓN LEGAL",
      completed: false
    },
    {
      name: "PODER DE REPRESENTACIÓN REGULATORIA",
      completed: false
    },
    {
      name: "CERTIFICADO DE LIBRE VENTA DEL PAÍS DE ORIGEN APOSTILLADO DIGITAL",
      completed: false
    },
    {
      name: "ISO 13485 APOSTILLADO DIGITAL (EN CASO DE NO TENER CFG)",
      completed: false
    },
    {
      name: "INSTRUCCIONES DE USO",
      completed: false
    },
    {
      name: "ESPECIFICACIONES DEL PRODUCTO TERMINADO (PIF)",
      completed: false
    },
    {
      name: "EMPAQUE PRIMARIO Y SECUNDARIO",
      completed: false
    },
    {
      name: "LITERATURA TÉCNICA DEL PRODUCTO (CATALOGO, INSERTO) CUANDO APLIQUE",
      completed: false
    },
    {
      name: "CERTIFICADO DE CONTROL DE CALIDAD EMITIDA POR EL LABORATORIO FABRICANTE (CoA)",
      completed: false
    },
    { name: "ETIQUETADO", completed: false }
  ];
  const tasksHonPS = [
    {
      name: "PODER DE REPRESENTACIÓN LEGAL",
      completed: false
    },
    {
      name: "CÓDIGO INTERNACIONAL GMDN O UMDNS (PIF)",
      completed: false
    },
    {
      name: "DESCRIPCIÓN DEL PRODUCTO (PIF)",
      completed: false
    },
    {
      name: "ESPECIFICACIONES DEL PRODUCTO TERMINADO (PIF)",
      completed: false
    },
    {
      name: "EMPAQUE PRIMARIO Y SECUNDARIO (POUCH AND CARTON LABELS)",
      completed: false
    },
    {
      name: "LITERATURA TÉCNICA DEL PRODUCTO (CATALOGO, INSERTO) CUANDO APLIQUE (PIF)",
      completed: false
    },
    {
      name: "INSTRUCCIONES DE FUNCIONAMIENTO",
      completed: false
    },
    {
      name: "ETIQUETAS (COUCH AND CARTON) *NO CONTINUAR SIN LOS REQUISITOS PREVIOS COMPLETOS",
      completed: false
    },
    {
      name: "PODER DE REPRESENTACÓN",
      completed: false
    },
    {
      name: "DECLARACIÓN JURADA FORMATO ARSA HONDURAS",
      completed: false
    },
    {
      name: "CERTIFICADO DE LIBRE VENTA DEL PAÍS DE ORIGEN",
      completed: false
    },
    {
      name: "CERTIFICADO DE BUENAS PRACTICAS DE MANUFACTURA",
      completed: false
    },
    {
      name: "DESCRIPCIÓN DEL PRODUCTO",
      completed: false
    },
    {
      name: "ESPECIFICACIONES DEL PRODUCTO TERMINADO",
      completed: false
    },
    {
      name: "EMPAQUE PRIMARIO Y SECUNDARIO",
      completed: false
    },
    {
      name: "LITERATURA TÉCNICA DEL PRODUCTO (CATALOGO, INSERTO) CUANDO APLIQUE",
      completed: false
    }
  ];
  const tasksHonPR = [
    {
      name: "PODER DE REPRESENTACIÓN LEGAL",
      completed: false
    },
    {
      name: "DECLARACIÓN JURADA FORMATO ARSA HONDURAS",
      completed: false
    },
    {
      name: "CÓDIGO INTERNACIONAL GMDN O UMDNS",
      completed: false
    },
    {
      name: "EMPAQUE PRIMARIO Y SECUNDARIO",
      completed: false
    },
    {
      name: "LITERATURA TÉCNICA DEL PRODUCTO (CATALOGO, INSERTO) CUANDO APLIQUE",
      completed: false
    },
    {
      name: "ETIQUETAS PRIMARIAS Y SECUNDARIAS",
      completed: false
    },
    {
      name: "CERTIFICADO DE LIBRE VENTA DEL PAÍS DE ORIGEN",
      completed: false
    },
    {
      name: "CERTIFICADO DE BUENAS PRACTICAS DE MANUFACTURA",
      completed: false
    },
    { name: "DFU", completed: false },
    {
      name: "ESPECIFICACIONES DEL PRODUCTO TERMINADO (PIF)",
      completed: false
    }
  ];
  const tasksSalPS = [
    {
      name: "NUMERO DE MANDAMIENTO DE PAGO CANCELADO",
      completed: false
    },
    {
      name: "FORMULARIO DE REGISTRO DE DISPOSITIVOS MÉDICOS",
      completed: false
    },
    {
      name: "CERTIFICADO DE LIBRE VENTA (CLV)",
      completed: false
    },
    {
      name: "CERTIFICADO BUENAS PRACTICAS DE MANUFACTURA (BMP) O DOCUMENTO QUE CERTIQUE EL CUMPLIMIENTO DE GARANTÍA DE MANUFACTURA",
      completed: false
    },
    {
      name: "PODER DE REPRESENTACIÓN LEGAL (APODERADO LEGAL)",
      completed: false
    },
    {
      name: "PODER DE REPRESENTACIÓN REGULATORIA (PROFESIONAL RESPONSABLE)",
      completed: false
    },
    {
      name: "DOCUMENTO CON ESPECIFICACIONES PARA EL CONTROL DE CALIDAD  CoA",
      completed: false
    },
    {
      name: "CONTRATO DE FABRICACIÓN O MAQUILA_CUANDO APLIQUE APOSTILLADO",
      completed: false
    },
    {
      name: "FICHA TÉCNICA DEL DISPOSITIVO MÉDICO (PIF)",
      completed: false
    },
    {
      name: "INFORMACIÓN TÉCNICA DEL DISPOSITIVO MÉDICO (TECH FILE)",
      completed: false
    },
    {
      name: "PROYECTO DE ETIQUETA DEL ENVASE/ EMPAQUE PRIMARIO",
      completed: false
    },
    {
      name: "PROYECTO DE ETIQUETA DEL ENVASE/ EMPAQUE SECUNDARIO",
      completed: false
    },
    {
      name: "INFORME DE GESTIÓN DE RIESGOS",
      completed: false
    },
    {
      name: "CARTA DE INFORME DE SEGURIDAD Y ALERTAS SANITARIO",
      completed: false
    },
    {
      name: "INFORME DE QUEJAS",
      completed: false
    }
  ];
  const tasksSalPR = [
    {
      name: "NUMERO DE MANDAMIENTO DE PAGO CANCELADO",
      completed: false
    },
    {
      name: "FORMULARIO DE REGISTRO DE DISPOSITIVOS MÉDICOS",
      completed: false
    },
    {
      name: "CERTIFICADO DE LIBRE VENTA (CLV)",
      completed: false
    },
    {
      name: "CERTIFICADO BUENAS PRACTICAS DE MANUFACTURA (BMP) O DOCUMENTO QUE CERTIQUE EL CUMPLIMIENTO DE GARANTÍA DE MANUFACTURA",
      completed: false
    },
    {
      name: "PODER DE REPRESENTACIÓN LEGAL (APODERADO LEGAL)",
      completed: false
    },
    {
      name: "PODER DE REPRESENTACIÓN REGULATORIA (PROFESIONAL RESPONSABLE)",
      completed: false
    },
    {
      name: "DOCUMENTO CON ESPECIFICACIONES PARA EL CONTROL DE CALIDAD",
      completed: false
    },
    {
      name: "CONTRATO DE FABRICACIÓN O MAQUILA CUANDO APLIQUE APOSTILLADO",
      completed: false
    },
    {
      name: "FICHA TÉCNICA DEL DISPOSITIVO MÉDICO",
      completed: false
    },
    {
      name: "INFORMACIÓN TÉCNICA DEL DISPOSITIVO MÉDICO",
      completed: false
    },
    {
      name: "PROYECTO DE ETIQUETA DEL ENVASE/ EMPAQUE PRIMARIO",
      completed: false
    },
    {
      name: "PROYECTO DE ETIQUETA DEL ENVASE/ EMPAQUE SECUNDARIO",
      completed: false
    },
    {
      name: "INFORME DE GESTIÓN DE RIESGOS",
      completed: false
    },
    {
      name: "INFORME DE SEGURIDAD Y ALERTAS SANITARIO",
      completed: false
    }
  ];
  const tasksNicPSclass1 = [
    {
      name: "PODER DE REPRESENTACIÓN LEGAL APOSTILLADO",
      completed: false
    },
    {
      name: "PODER DE REPRESENTACIÓN REGULATORIA APOSTILLADO",
      completed: false
    },
    {
      name: "CERTIFICADO DE LIBRE VENTA DEL PAÍS DE ORIGEN  APOSTILLADO",
      completed: false
    },
    {
      name: "CERTIFICADO DE BUENAS PRACTICAS DE MANUFACTURA 1SO13485 ORIGINAL APOSTILADO",
      completed: false
    },
    {
      name: "SEGÚN CORRESPONDA AL DISPOSITIVO MÉDICO DEBE CUMPLIR CON ALGUNO DE LOS CERTIFICADOS INTERNACIONALES (FDA,CE,TUV) O SU EQUIVALENTE PLENAMENTE DEMOSTRABLE ENTRE OTROS APOSTILLADO",
      completed: false
    },
    {
      name: "DESCRIPCIÓN DEL PRODUCTO  (PIF)",
      completed: false
    },
    {
      name: "ESPECIFICACIONES DEL PRODUCTO TERMINADO (DESIGN VERIFICATION REPORT)",
      completed: false
    },
    {
      name: "EMPAQUE PRIMARIO Y SECUNDARIO (PIF)",
      completed: false
    },
    {
      name: "LITERATURA TÉCNICA DEL PRODUCTO (CATALOGO, INSERTO) CUANDO APLIQUE",
      completed: false
    },
    {
      name: "CERTIFICADO DE CONTROL DE CALIDAD EMITIDA POR EL LABORATORIO FABRICANTE (CoA)",
      completed: false
    }
  ];
  const tasksNicPSclass2 = [
    {
      name: "PODER DE REPRESENTACIÓN LEGAL APOSTILLADO",
      completed: false
    },
    {
      name: "PODER DE REPRESENTACIÓN REGULATORIA APOSTILLADO",
      completed: false
    },
    {
      name: "CERTIFICADO DE LIBRE VENTA DEL PAÍS DE ORIGEN  APOSTILLADO",
      completed: false
    },
    {
      name: "CERTIFICADO DE BUENAS PRACTICAS DE MANUFACTURA 1SO13485 ORIGINAL APOSTILADO",
      completed: false
    },
    {
      name: "REGISTRO SANITARIO DEL PAÍS DE ORIGEN",
      completed: false
    },
    {
      name: "SEGÚN CORRESPONDA AL DISPOSITIVO MÉDICO DEBE CUMPLIR CON ALGUNO DE LOS CERTIFICADOS INTERNACIONALES (FDA,CE,TUV) O SU EQUIVALENTE PLENAMENTE DEMOSTRABLE ENTRE OTROS APOSTILLADO",
      completed: false
    },
    {
      name: "SEGÚN CORRESPONDA AL DISPOSITIVO MÉDICO DEBE CUMPLIR CON ALGUNO DE LOS CERTIFICADOS INTERNACIONALES (UL, IEC, CSA) O SU EQUIVALENTE PLENAMENTE DEMOSTRABLE ENTRE OTROS APOSTILLADO",
      completed: false
    },
    {
      name: "DESCRIPCIÓN DEL PRODUCTO",
      completed: false
    },
    {
      name: "ESPECIFICACIONES DEL PRODUCTO TERMINADO, INCLUIR MATERIALES DE FABRICACIÓN",
      completed: false
    },
    {
      name: "EMPAQUE PRIMARIO Y SECUNDARIO",
      completed: false
    },
    {
      name: "LITERATURA TÉCNICA DEL PRODUCTO (CATALOGO, INSERTO) CUANDO APLIQUE",
      completed: false
    },
    {
      name: "MUESTRAS DEL PRODUCTO CON MÍNIMO 18 MESES DE VIGENCIA",
      completed: false
    },
    {
      name: "CERTIFICADO DE CONTROL DE CALIDAD EMITIDA POR EL LABORATORIO FABRICANTE (CoA), DEL LOTE CORRESPONDIENTE A LA MUESTRA PRESENTADA",
      completed: false
    },
    {
      name: "PROGRAMA DE VIGILANCIA POR PARTE DE FABRICANTE (PARA EQUIPOS DE ALTA TECNOLOGÍA)",
      completed: false
    },
    {
      name: "DECLARACIÓN PREVIA DE MÉTODO DE ESTERILIZACIÓN (CUANDO APLIQUE)",
      completed: false
    }
  ];
  const tasksNicPSclass3 = [
    {
      name: "PODER DE REPRESENTACIÓN LEGAL APOSTILLADO",
      completed: false
    },
    {
      name: "PODER DE REPRESENTACIÓN REGULATORIA",
      completed: false
    },
    {
      name: "CERTIFICADO DE LIBRE VENTA DEL PAÍS DE ORIGEN",
      completed: false
    },
    {
      name: "CERTIFICADO DE BUENAS PRACTICAS DE MANUFACTURA ISO13485 ORIGINAL APOSTILLADO ",
      completed: false
    },
    {
      name: "REGISTRO SANITARIO DEL PAÍS DE ORIGEN",
      completed: false
    },
    {
      name: "SEGÚN CORRESPONDA AL DISPOSITIVO MÉDICO DEBE CUMPLIR CON ALGUNO DE LOS CERTIFICADOS INTERNACIONALES (FDA,CE,TUV) O SU EQUIVALENTE PLENAMENTE DEMOSTRABLE ENTRE OTROSO",
      completed: false
    },
    {
      name: "SEGÚN CORRESPONDA AL DISPOSITIVO MÉDICO DEBE CUMPLIR CON ALGUNO DE LOS CERTIFICADOS INTERNACIONALES (UL, IEC, CSA) O SU EQUIVALENTE PLENAMENTE DEMOSTRABLE,ENTRE OTROS.",
      completed: false
    },
    {
      name: "DESCRIPCIÓN DEL PRODUCTO  INCLUIR MATERIALES USADOS EN SU FABRICACIÓN (PIF, TECH FILE, BICOMPATIBILIDAD)",
      completed: false
    },
    {
      name: "ESPECIFICACIONES DEL PRODUCTO TERMINADO (DESIGN VERIFICATION REPORT)",
      completed: false
    },
    {
      name: "EMPAQUE PRIMARIO Y SECUNDARIO (PIF)",
      completed: false
    },
    {
      name: "LITERATURA TÉCNICA DEL PRODUCTO (CATALOGO, INSERTO) CUANDO APLIQUE",
      completed: false
    },
    {
      name: "MUESTRAS DEL PRODUCTO CON MÍNIMO 18 MESES DE VIGENCIA",
      completed: false
    },
    {
      name: "CERTIFICADO DE CONTROL DE CALIDAD EMITIDA POR EL LABORATORIO FABRICANTE (CoA), DEL LOTE CORRESPONDIENTE A LA MUESTRA PRESENTADA",
      completed: false
    },
    {
      name: "PROGRAMA DE VIGILANCIA POR PARTE DE FABRICANTE (PARA EQUIPOS DE ALTA TECNOLOGÍA)",
      completed: false
    },
    {
      name: "DECLARACIÓN PREVIA DE MÉTODO DE ESTERILIZACIÓN (CUANDO APLIQUE)",
      completed: false
    },
    {
      name: "ESTUDIOS CLÍNICOS DE TERCER NIVEL SOBRE EL USO PARA LA DEMOSTRAR LA SEGURIDAD Y EFECTIVIDAD",
      completed: false
    },
    {
      name: "LISTA DE LOS PAÍSES DONDE EL DISPOSITIVO MÉDICO HA SIDO VENDIDO Y UN RESUMEN DE CUALQUIER PROBLEMA REPORTADO A LA SALIDA POST MERCADO, SI LOS HUBIERA EN CUALQUIERA DE ESOS PAÍSES",
      completed: false
    },
    {
      name: "PRESENTACIÓN DE UN PROGRAMA DE REPORTE DE FALLAS TERAPÉUTICAS E INCIDENTES ADVERSOS PARA LOS DISPOSITIVOS MÉDICOS EMITIDOS POR EL FABRICANTE. DEBERÁN LLEVAR ESTUDIOS CLÍNICOS DE LAS FASE II Y III, SOBRE EL USO PARA LA DEMOSTRAR LA SEGURIDAD Y EFECTIVIDAD",
      completed: false
    }
  ];
  const tasksNicPSclass4 = [
    {
      name: "PODER DE REPRESENTACIÓN LEGAL",
      completed: false
    },
    {
      name: "PODER DE REPRESENTACIÓN REGULATORIA",
      completed: false
    },
    {
      name: "CERTIFICADO DE LIBRE VENTA DEL PAÍS DE ORIGEN ",
      completed: false
    },
    {
      name: "CERTIFICADO DE BUENAS PRACTICAS DE MANUFACTURA",
      completed: false
    },
    {
      name: "REGISTRO SANITARIO DEL PAÍS DE ORIGEN",
      completed: false
    },
    {
      name: "SEGÚN CORRESPONDA AL DISPOSITIVO MÉDICO DEBE CUMPLIR CON ALGUNO DE LOS CERTIFICADOS INTERNACIONALES (FDA,CE,TUV) O SU EQUIVALENTE PLENAMENTE DEMOSTRABLE ENTRE OTROS",
      completed: false
    },
    {
      name: "SEGÚN CORRESPONDA AL DISPOSITIVO MÉDICO DEBE CUMPLIR CON ALGUNO DE LOS CERTIFICADOS INTERNACIONALES (UL, IEC, CSA) O SU EQUIVALENTE PLENAMENTE DEMOSTRABLE ENTRE OTROS",
      completed: false
    },
    {
      name: "DESCRIPCIÓN DEL PRODUCTO  INCLUIR MATERIALES USADOS EN SU FABRICACIÓN",
      completed: false
    },
    {
      name: "ESPECIFICACIONES DEL PRODUCTO TERMINADO",
      completed: false
    },
    {
      name: "EMPAQUE PRIMARIO Y SECUNDARIO",
      completed: false
    },
    {
      name: "LITERATURA TÉCNICA DEL PRODUCTO (CATALOGO, INSERTO) CUANDO APLIQUE",
      completed: false
    },
    {
      name: "MUESTRAS DEL PRODUCTO CON MÍNIMO 18 MESES DE VIGENCIA",
      completed: false
    },
    {
      name: "CERTIFICADO DE CONTROL DE CALIDAD EMITIDA POR EL LABORATORIO FABRICANTE (CoA), DEL LOTE CORRESPONDIENTE A LA MUESTRA PRESENTADA",
      completed: false
    },
    {
      name: "PROGRAMA DE VIGILANCIA POR PARTE DE FABRICANTE (PARA EQUIPOS DE ALTA TECNOLOGÍA)",
      completed: false
    },
    {
      name: "DECLARACIÓN PREVIA DE MÉTODO DE ESTERILIZACIÓN (CUANDO APLIQUE)",
      completed: false
    },
    {
      name: "LICENCIA SANITARIA DEL ESTABLECIMIENTO, EMITIDO POR LA DIRECCIÓN DE REGISTRO DE DISPOSITIVOS MÉDICOS",
      completed: false
    },
    {
      name: "ESTUDIOS CLÍNICOS DE TERCER NIVEL SOBRE EL USO PARA LA DEMOSTRAR LA SEGURIDAD Y EFECTIVIDAD",
      completed: false
    },
    {
      name: "LISTA DE LOS PAÍSES DONDE EL DISPOSITIVO MÉDICO HA SIDO VENDIDO Y UN RESUMEN DE CUALQUIER PROBLEMA REPORTADO A LA SALIDA POST MERCADO, SI LOS HUBIERA EN CUALQUIERA DE ESOS PAÍSES",
      completed: false
    },
    {
      name: "PRESENTACIÓN DE UN PROGRAMA DE REPORTE DE FALLAS TERAPÉUTICAS E INCIDENTES ADVERSOS PARA LOS DISPOSITIVOS MÉDICOS EMITIDOS POR EL FABRICANTE. DEBERÁN LLEVAR ESTUDIOS CLÍNICOS DE LAS FASE II Y III, SOBRE EL USO PARA LA DEMOSTRAR LA SEGURIDAD Y EFECTIVIDAD",
      completed: false
    },
    {
      name: "ANÁLISIS Y EVALUACIÓN DE RIESGOS Y LAS MEDIDAS A ADOPTAR PARA LA REDUCCIÓN DE ELLOS, QUE SATISFAGAN LOS REQUERIMIENTOS DE SEGURIDAD Y EFICACIA, ELABORADOS POR LA CASA FABRICANTE",
      completed: false
    },
    {
      name: "BIBLIOGRAFÍA DE REPORTES PUBLICADOS RELACIONADOS SOBRE EL USO, SEGURIDAD Y EFICACIA DEL DISPOSITIVO MÉDICO",
      completed: false
    }
  ];
  const tasksNicPR = [
    {
      name: "DECLARACION JURADA (TEMPLATES, NICARAGUA) ",
      completed: false
    },
    {
      name: "CE CERTIFICATE APOSTILLADO",
      completed: false
    },
    {
      name: "CERTIFICADO DE LIBRE VENTA DEL PAÍS DE ORIGEN (APOSTILLADO)",
      completed: false
    },
    {
      name: "CERTIFICADO DE BUENAS PRACTICAS DE MANUFACTURA (APOSTILLADO)",
      completed: false
    },
    {
      name: "ETIQUETADO (POUCH Y CARTON)",
      completed: false
    },
    {
      name: "MATERIAL DE EMPAQUE (PIF)",
      completed: false
    },
    {
      name: "PROGRAMA DE VIGILANCIA",
      completed: false
    },
    {
      name: "ANALISIS DE RIESGOS (DDR)",
      completed: false
    }
  ];
  const tasksCRPSclass2 = [
    {
      name: "PODER DE REPRESENTACIÓN LEGAL",
      completed: false
    },
    {
      name: "PODER DE REPRESENTACIÓN REGULATORIA",
      completed: false
    },
    {
      name: "CERTIFICADO DE LIBRE VENTA DEL PAÍS DE ORIGEN (APOSTILLADO DIGITAL) / PERMISO SANITARIO DE FUNCIONAMIENTO SI EL PRODUCTO SE MANUFACTURA EN CR",
      completed: false
    },
    {
      name: "CERTIFICACION NOTARIAL DE CERTIFICADO DE LIBRE VENTA DEL PAÍS DE ORIGEN (APOSTILLADO DIGITAL)",
      completed: false
    },
    {
      name: "TRADUCCION OFICIAL DE CERTIFICADO DE LIBRE VENTA DEL PAÍS DE ORIGEN (APOSTILLADO DIGITAL)",
      completed: false
    },
    {
      name: "CERTIFICADO DE BUENAS PRACTICAS DE MANUFACTURA  EMITIDO EN PAIS DE ORIGEN (1SO13485 APOSTILLADO DIGITAL)",
      completed: false
    },
    {
      name: "CERTIFICACION NOTARIAL DEL 1SO13485 APOSTILLADO",
      completed: false
    },
    {
      name: "TRADUCCION OFICIAL DE CERTIFICADO DEL ISO13485",
      completed: false
    },
    {
      name: "DESCRIPCIÓN DEL PRODUCTO  - INSTRUCCIONES DE USO (IFU)",
      completed: false
    },
    {
      name: "RESUMEN DE ESPECIFICACIONES TECNICAS Y MEDICAS",
      completed: false
    },
    {
      name: "SI ES ESTSERIL PRESENTAR INFORME DE EVALUACION DE ESTERILIZACION",
      completed: false
    },
    {
      name: "EMPAQUE PRIMARIO Y SECUNDARIO (ORIGINAL)",
      completed: false
    },
    {
      name: "LITERATURA TÉCNICA DEL PRODUCTO (CATALOGO, INSERTO) CUANDO APLIQUE",
      completed: false
    },
    {
      name: "CERTIFICADO DE CONTROL DE CALIDAD EMITIDA POR EL LABORATORIO FABRICANTE (CoA)",
      completed: false
    },
    {
      name: "AUTORIZACIÓN DE LA FUENTE DE EMISIÓN PARA LOS EMB QUE EMITEN RADIACIONES",
      completed: false
    },
    {
      name: "CONTRATO DE MANUFACTURA EN CASO DE FABRICACION POR TERCEROS",
      completed: false
    },
    {
      name: "CARTA ACLARATORIA DE TITULARIDAD EN CASO DE QUE APLIQUE",
      completed: false
    }
  ];
  const tasksCRPSclass3 = [
    {
      name: "PODER DE REPRESENTACIÓN LEGAL",
      completed: false
    },
    {
      name: "PODER DE REPRESENTACIÓN REGULATORIA",
      completed: false
    },
    {
      name: "CERTIFICADO DE LIBRE VENTA DEL PAÍS DE ORIGEN (APOSTILLADO DIGITAL) / PERMISO SANITARIO DE FUNCIONAMIENTO SI EL PRODUCTO SE MANUFACTURA EN CR",
      completed: false
    },
    {
      name: "CERTIFICACION NOTARIAL DE CERTIFICADO DE LIBRE VENTA DEL PAÍS DE ORIGEN (APOSTILLADO DIGITAL)",
      completed: false
    },
    {
      name: "TRADUCCION OFICIAL DE CERTIFICADO DE LIBRE VENTA DEL PAÍS DE ORIGEN (APOSTILLADO DIGITAL)",
      completed: false
    },
    {
      name: "CERTIFICADO DE BUENAS PRACTICAS DE MANUFACTURA  EMITIDO EN PAIS DE ORIGEN (1SO13485 APOSTILLADO DIGITAL)",
      completed: false
    },
    {
      name: "CERTIFICACION NOTARIAL DEL 1SO13485 APOSTILLADO",
      completed: false
    },
    {
      name: "TRADUCCION OFICIAL DE CERTIFICADO DEL ISO13485",
      completed: false
    },
    {
      name: "DESCRIPCIÓN DEL PRODUCTO  - INSTRUCCIONES DE USO (IFU)",
      completed: false
    },
    {
      name: "RESUMEN DE ESPECIFICACIONES TECNICAS Y MEDICAS",
      completed: false
    },
    {
      name: "SI ES ESTSERIL PRESENTAR INFORME DE EVALUACION DE ESTERILIZACION",
      completed: false
    },
    {
      name: "EMPAQUE PRIMARIO Y SECUNDARIO (ORIGINAL)",
      completed: false
    },
    {
      name: "LITERATURA TÉCNICA DEL PRODUCTO (CATALOGO, INSERTO) CUANDO APLIQUE",
      completed: false
    },
    {
      name: "CERTIFICADO DE CONTROL DE CALIDAD EMITIDA POR EL LABORATORIO FABRICANTE (CoA)",
      completed: false
    },
    {
      name: "AUTORIZACIÓN DE LA FUENTE DE EMISIÓN PARA LOS EMB QUE EMITEN RADIACIONES",
      completed: false
    },
    {
      name: "CONTRATO DE MANUFACTURA EN CASO DE FABRICACION POR TERCEROS",
      completed: false
    },
    {
      name: "CARTA ACLARATORIA DE TITULARIDAD EN CASO DE QUE APLIQUE",
      completed: false
    },
    {
      name: "LITERATURA TÉCNICA DEL PRODUCTO (CATALOGO, INSERTO) CUANDO APLIQUE",
      completed: false
    },
    {
      name: "CERTIFICADO DE CONTROL DE CALIDAD EMITIDA POR EL LABORATORIO FABRICANTE (CoA)",
      completed: false
    },
    {
      name: "INDICAR NORMA INTERNACIONAL QUE CONTENGA LOS ESTÁNDARES DE EXACTITUD Y PRECISIÓN APLICABLES AL EMB",
      completed: false
    },
    {
      name: "LISTA DE LOS PAÍSES EN DONDE SE COMERCIALIZA",
      completed: false
    },
    {
      name: "PRESENTACIÓN DE UN PROGRAMA DE VIGILANCIA PARA EL EMB POR PARTE DEL FABRICANTE",
      completed: false
    },
    {
      name: "RESUMEN EN ESPAÑOL DE LOS ENSAYOS CLÍNICOS INCLUYENDO LAS REFERENCIAS BIBLIOGRÁFICAS, DONDE SE DEMUESTRA LA SEGURIDAD Y EFICACIA DEL EMB Y EL ESTUDIO COMPLETO EN FORMA DIGITAL EN LOS DIGITAL O IMPRESA",
      completed: false
    }
  ];
  const tasksCRPSclass4 = [
    {
      name: "PODER DE REPRESENTACIÓN LEGAL",
      completed: false
    },
    {
      name: "PODER DE REPRESENTACIÓN REGULATORIA",
      completed: false
    },
    {
      name: "CERTIFICADO DE LIBRE VENTA DEL PAÍS DE ORIGEN (APOSTILLADO DIGITAL) / PERMISO SANITARIO DE FUNCIONAMIENTO SI EL PRODUCTO SE MANUFACTURA EN CR",
      completed: false
    },
    {
      name: "CERTIFICACION NOTARIAL DE CERTIFICADO DE LIBRE VENTA DEL PAÍS DE ORIGEN (APOSTILLADO DIGITAL)",
      completed: false
    },
    {
      name: "TRADUCCION OFICIAL DE CERTIFICADO DE LIBRE VENTA DEL PAÍS DE ORIGEN (APOSTILLADO DIGITAL)",
      completed: false
    },
    {
      name: "CERTIFICADO DE BUENAS PRACTICAS DE MANUFACTURA  EMITIDO EN PAIS DE ORIGEN (1SO13485 APOSTILLADO DIGITAL)",
      completed: false
    },
    {
      name: "CERTIFICACION NOTARIAL DEL 1SO13485 APOSTILLADO",
      completed: false
    },
    {
      name: "TRADUCCION OFICIAL DE CERTIFICADO DEL ISO13485",
      completed: false
    },
    {
      name: "DESCRIPCIÓN DEL PRODUCTO  - INSTRUCCIONES DE USO (IFU)",
      completed: false
    },
    {
      name: "RESUMEN DE ESPECIFICACIONES TECNICAS Y MEDICAS",
      completed: false
    },
    {
      name: "SI ES ESTSERIL PRESENTAR INFORME DE EVALUACION DE ESTERILIZACION",
      completed: false
    },
    {
      name: "EMPAQUE PRIMARIO Y SECUNDARIO (ORIGINAL)",
      completed: false
    },
    {
      name: "LITERATURA TÉCNICA DEL PRODUCTO (CATALOGO, INSERTO) CUANDO APLIQUE",
      completed: false
    },
    {
      name: "CERTIFICADO DE CONTROL DE CALIDAD EMITIDA POR EL LABORATORIO FABRICANTE (CoA)",
      completed: false
    },
    {
      name: "AUTORIZACIÓN DE LA FUENTE DE EMISIÓN PARA LOS EMB QUE EMITEN RADIACIONES",
      completed: false
    },
    {
      name: "CONTRATO DE MANUFACTURA EN CASO DE FABRICACION POR TERCEROS",
      completed: false
    },
    {
      name: "CARTA ACLARATORIA DE TITULARIDAD EN CASO DE QUE APLIQUE",
      completed: false
    },
    {
      name: "LITERATURA TÉCNICA DEL PRODUCTO (CATALOGO, INSERTO) CUANDO APLIQUE",
      completed: false
    },
    {
      name: "CERTIFICADO DE CONTROL DE CALIDAD EMITIDA POR EL LABORATORIO FABRICANTE (CoA)",
      completed: false
    },
    {
      name: "INDICAR NORMA INTERNACIONAL QUE CONTENGA LOS ESTÁNDARES DE EXACTITUD Y PRECISIÓN APLICABLES AL EMB",
      completed: false
    },
    {
      name: "LISTA DE LOS PAÍSES EN DONDE SE COMERCIALIZA",
      completed: false
    },
    {
      name: "PRESENTACIÓN DE UN PROGRAMA DE VIGILANCIA PARA EL EMB POR PARTE DEL FABRICANTE",
      completed: false
    },
    {
      name: "RESUMEN EN ESPAÑOL DE LOS ENSAYOS CLÍNICOS INCLUYENDO LAS REFERENCIAS BIBLIOGRÁFICAS, DONDE SE DEMUESTRA LA SEGURIDAD Y EFICACIA DEL EMB Y EL ESTUDIO COMPLETO EN FORMA DIGITAL EN LOS DIGITAL O IMPRESA",
      completed: false
    },
    {
      name: "COPIA DEL ESTUDIO DE ANÁLISIS Y EVALUACIÓN DE RIESGOS Y LAS MEDIDAS A ADOPTAR PARA LA REDUCCIÓN DE ELLOS, QUE SATISFAGAN LOS REQUERIMIENTOS DE SEGURIDAD Y EFICACIA, ELABORADOS PARA LA CASA FABRICANTE",
      completed: false
    },
    {
      name: "REFERENCIAS BIBLIOGRÁFICAS DE REPORTES PUBLICADOS RELACIONADOS SOBRE EL USO, SEGURIDAD Y EFICACIA DEL EMB",
      completed: false
    }
  ];
  const tasksCRPR = [
    {
      name: "CONTRATO DE FABRICACIÓN, CUANDO SE TRATE DE UNA FABRICACIÓN POR TERCEROS",
      completed: false
    },
    {
      name: "DECLARACIÓN JURADA EMITIDA POR EL FABRICANTE O EL TITULAR DEL PRODUCTO O SU REPRESENTANTE LEGAL ",
      completed: false
    },
    {
      name: "CERTIFICADO DE BUENAS PRÁCTICAS DE MANUFACTURA",
      completed: false
    },
    {
      name: "CERTIFICADO DE LIBRE VENTA - PSF",
      completed: false
    },
    { name: "ETIQUETA", completed: false }
  ];
  const tasksPanPSclass1 = [
    {
      name: "PODER DE REPRESENTACIÓN LEGAL",
      completed: false
    },
    {
      name: "COPIA DE LOS DOCUMENTOS DEL FABRICANTE CON LITERATURA TÉCNICA DEL DISPOSITIVO  MÉDICO (PIF, TECH FILE)",
      completed: false
    },
    {
      name: "COPIA SIMPLE DEL INSTRUCTIVO Y/O INSERTO, EN ESPAÑOL POR CADA DISPOSITIVO PRESENTADO (DFU)",
      completed: false
    },
    {
      name: "CERTIFICADO DE BUENAS PRÁCTICAS DE FABRICACIÓN U OTRAS CERTIFICACIONES DE CALIDAD EMITIDAS POR ENTIDADES RECONOCIDAS (APOSTILLADA O CONSULARIZADA 13485)",
      completed: false
    },
    {
      name: "CERTIFICADO DE LIBRE VENTA VIGENTE.  SI EXISTE MÁS DE UN PAÍS DE PROCEDENCIA DEBERÁN PRESENTAR EL CERTIFICADO DE LIBRE VENTA DE TODOS LOS PAÍSES (APOSTILLADO O CONSULARIZADO)",
      completed: false
    },
    {
      name: "FOTOS A COLORES DEL DISPOSITIVO MÉDICO EN LA QUE SE PUEDA VERIFICAR LAS CARACTERÍSTICAS DEL DISPOSITIVO MÉDICO Y EL EMPAQUE DEL PRODUCTO",
      completed: false
    },
    {
      name: "COPIA SIMPLE A COLORES (LEGIBLE) DEL ETIQUETADO DEL PRODUCTO O DE LA PROPUESTA DEL ETIQUETADO (PRIMARIO Y SECUNDARIO)",
      completed: false
    }
  ];
  const tasksPanPSclass2 = [
    {
      name: "PODER DE REPRESENTACIÓN LEGAL",
      completed: false
    },
    {
      name: "COPIA DE LOS DOCUMENTOS DEL FABRICANTE CON LITERATURA TÉCNICA DEL DISPOSITIVO  MÉDICO (PIF, TECH FILE)",
      completed: false
    },
    {
      name: "COPIA SIMPLE DEL INSTRUCTIVO Y/O INSERTO, EN ESPAÑOL POR CADA DISPOSITIVO PRESENTADO (DFU)",
      completed: false
    },
    {
      name: "CERTIFICADO DE BUENAS PRÁCTICAS DE FABRICACIÓN U OTRAS CERTIFICACIONES DE CALIDAD EMITIDAS POR ENTIDADES RECONOCIDAS (APOSTILLADA O CONSULARIZADA 13485)",
      completed: false
    },
    {
      name: "CERTIFICADO DE LIBRE VENTA VIGENTE.  SI EXISTE MÁS DE UN PAÍS DE PROCEDENCIA DEBERÁN PRESENTAR EL CERTIFICADO DE LIBRE VENTA DE TODOS LOS PAÍSES (APOSTILLADO O CONSULARIZADO)",
      completed: false
    },
    {
      name: "FOTOS A COLORES DEL DISPOSITIVO MÉDICO EN LA QUE SE PUEDA VERIFICAR LAS CARACTERÍSTICAS DEL DISPOSITIVO MÉDICO Y EL EMPAQUE DEL PRODUCTO",
      completed: false
    },
    {
      name: "COPIA SIMPLE A COLORES (LEGIBLE) DEL ETIQUETADO DEL PRODUCTO O DE LA PROPUESTA DEL ETIQUETADO (PRIMARIO Y SECUNDARIO)",
      completed: false
    },
    {
      name: "PROCESO DEL MÉTODO DE ESTERILIZACIÓN QUE SE UTILIZÓ (CUANDO APLIQUE)",
      completed: false
    },
    {
      name: "DISPOSITIVOS REUTILIZABLES, EL MÉTODO DE ESTERILIZACIÓN Y/O LIMPIEZA QUE SE DEBE UTILIZAR  (CUANDO APLIQUE)",
      completed: false
    }
  ];
  const tasksPanPSclass3 = [
    {
      name: "PODER DE REPRESENTACIÓN LEGAL",
      completed: false
    },
    {
      name: "COPIA DE LOS DOCUMENTOS DEL FABRICANTE CON LITERATURA TÉCNICA DEL DISPOSITIVO  MÉDICO (PIF, TECH FILE)",
      completed: false
    },
    {
      name: "COPIA SIMPLE DEL INSTRUCTIVO Y/O INSERTO, EN ESPAÑOL POR CADA DISPOSITIVO PRESENTADO (DFU)",
      completed: false
    },
    {
      name: "CERTIFICADO DE BUENAS PRÁCTICAS DE FABRICACIÓN U OTRAS CERTIFICACIONES DE CALIDAD EMITIDAS POR ENTIDADES RECONOCIDAS (APOSTILLADA O CONSULARIZADA 13485)",
      completed: false
    },
    {
      name: "CERTIFICADO DE LIBRE VENTA VIGENTE.  SI EXISTE MÁS DE UN PAÍS DE PROCEDENCIA DEBERÁN PRESENTAR EL CERTIFICADO DE LIBRE VENTA DE TODOS LOS PAÍSES (APOSTILLADO O CONSULARIZADO)",
      completed: false
    },
    {
      name: "FOTOS A COLORES DEL DISPOSITIVO MÉDICO EN LA QUE SE PUEDA VERIFICAR LAS CARACTERÍSTICAS DEL DISPOSITIVO MÉDICO Y EL EMPAQUE DEL PRODUCTO",
      completed: false
    },
    {
      name: "COPIA SIMPLE A COLORES (LEGIBLE) DEL ETIQUETADO DEL PRODUCTO O DE LA PROPUESTA DEL ETIQUETADO (PRIMARIO Y SECUNDARIO)",
      completed: false
    },
    {
      name: "PROCESO DEL MÉTODO DE ESTERILIZACIÓN QUE SE UTILIZÓ (CUANDO APLIQUE)",
      completed: false
    },
    {
      name: "DISPOSITIVOS REUTILIZABLES, EL MÉTODO DE ESTERILIZACIÓN Y/O LIMPIEZA QUE SE DEBE UTILIZAR  (CUANDO APLIQUE)",
      completed: false
    },
    {
      name: "RESUMEN DE ESTUDIOS O ENSAYOS CLÍNICOS DE SEGURIDAD Y EFECTIVIDAD (NO APLICA PARA EQUIPO BIOMÉDICO)",
      completed: false
    },
    {
      name: "DESCRIPCIÓN DE MATERIALES DE MANUFACTURA Y EMPAQUE (NO APLICA PARA EQUIPOS BIOMÉDICO)",
      completed: false
    }
  ];
  const tasksPanPSclass4 = [
    {
      name: "PODER DE REPRESENTACIÓN LEGAL",
      completed: false
    },
    {
      name: "COPIA DE LOS DOCUMENTOS DEL FABRICANTE CON LITERATURA TÉCNICA DEL DISPOSITIVO  MÉDICO (PIF, TECH FILE)",
      completed: false
    },
    {
      name: "COPIA SIMPLE DEL INSTRUCTIVO Y/O INSERTO, EN ESPAÑOL POR CADA DISPOSITIVO PRESENTADO (DFU)",
      completed: false
    },
    {
      name: "CERTIFICADO DE BUENAS PRÁCTICAS DE FABRICACIÓN U OTRAS CERTIFICACIONES DE CALIDAD EMITIDAS POR ENTIDADES RECONOCIDAS (APOSTILLADA O CONSULARIZADA 13485)",
      completed: false
    },
    {
      name: "CERTIFICADO DE LIBRE VENTA VIGENTE.  SI EXISTE MÁS DE UN PAÍS DE PROCEDENCIA DEBERÁN PRESENTAR EL CERTIFICADO DE LIBRE VENTA DE TODOS LOS PAÍSES (APOSTILLADO O CONSULARIZADO)",
      completed: false
    },
    {
      name: "FOTOS A COLORES DEL DISPOSITIVO MÉDICO EN LA QUE SE PUEDA VERIFICAR LAS CARACTERÍSTICAS DEL DISPOSITIVO MÉDICO Y EL EMPAQUE DEL PRODUCTO",
      completed: false
    },
    {
      name: "COPIA SIMPLE A COLORES (LEGIBLE) DEL ETIQUETADO DEL PRODUCTO O DE LA PROPUESTA DEL ETIQUETADO (PRIMARIO Y SECUNDARIO)",
      completed: false
    },
    {
      name: "PROCESO DEL MÉTODO DE ESTERILIZACIÓN QUE SE UTILIZÓ (CUANDO APLIQUE)",
      completed: false
    },
    {
      name: "DISPOSITIVOS REUTILIZABLES, EL MÉTODO DE ESTERILIZACIÓN Y/O LIMPIEZA QUE SE DEBE UTILIZAR  (CUANDO APLIQUE)",
      completed: false
    },
    {
      name: "RESUMEN DE ESTUDIOS O ENSAYOS CLÍNICOS DE SEGURIDAD Y EFECTIVIDAD (NO APLICA PARA EQUIPO BIOMÉDICO)",
      completed: false
    },
    {
      name: "DESCRIPCIÓN DE MATERIALES DE MANUFACTURA Y EMPAQUE (NO APLICA PARA EQUIPOS BIOMÉDICO)",
      completed: false
    },
    {
      name: "ANÁLISIS DE RIESGO Y LAS MEDIDAS DE SEGURIDAD DE REDUCCIÓN DE RIESGOS",
      completed: false
    },
    {
      name: "PROTOCOLOS DE TRAZABILIDAD",
      completed: false
    },
    {
      name: "INFORMACIÓN DETALLADA DE ESTUDIOS CLÍNICOS Y PRECLÍNICOS DE SEGURIDAD Y EFECTIVIDAD",
      completed: false
    },
    {
      name: "CERTIFICADO ISO 13485 VIGENTE DE MANERA OPCIONAL",
      completed: false
    }
  ];
  const tasksPanPRclass1and2 = [
    {
      name: "CERTIFICADO DE LIBRE VENTA Y CERTIFICADO DE CALIDAD ISO 13485 CON APOSTILLA",
      completed: false
    },
    {
      name: "DESCRIPCIÓN DE MATERIALES DE MANUFACTURA Y EMPAQUE",
      completed: false
    },
    {
      name: "FOTO DEL PRODUCTO",
      completed: false
    },
    {
      name: "FOTO DE ETIQUETA",
      completed: false
    },
    {
      name: "REPORTE DEL MÉTODO DE ESTERILIZACIÓN",
      completed: false
    }
  ];
  const tasksPanPRclass3and4 = [
    {
      name: "CERTIFICADO DE LIBRE VENTA Y CERTIFICADO DE CALIDAD ISO 13485 CON APOSTILLA",
      completed: false
    },
    {
      name: "DESCRIPCIÓN DE MATERIALES DE MANUFACTURA Y EMPAQUE",
      completed: false
    },
    {
      name: "FOTO DEL PRODUCTO",
      completed: false
    },
    {
      name: "FOTO DE ETIQUETA",
      completed: false
    },
    {
      name: "REPORTE DEL MÉTODO DE ESTERILIZACIÓN",
      completed: false
    },
    {
      name: "ESTUDIOS CLÍNICOS Y PRECLÍNICOS",
      completed: false
    },
    {
      name: "PROTOCOLO DE TRAZABILIDAD",
      completed: false
    }
  ];
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  {
    {
      showCheckIcon = item.status;
    }
  }
  modalOpen = false;
  return `<div class="collapse w-full collapse-arrow border border-base-300 bg-base-100 rounded-box"><input type="checkbox">
	<div class="collapse-title text-xl font-medium"><div class="w-full h-auto flex items-center md:justify-between flex-col min-[575px]:flex-row"><div class="flex flex-col w-full ml-4 h-full justify-center"><a href="${"/items/" + escape(item.id, true)}" class="font-semibold sm:text-2xl mb-2 text-sm">${escape(item.name)}</a>
				${item.process === "productSubmission" ? `<p class="text-base text-col font-medium text-primary">Product Submission</p>` : `${item.process === "productRenewal" ? `<p class="text-base text-col font-medium text-primary">Product Renewal</p>` : ``}`}
				<p class="font-light text-base">Business Unit: <span class="text-base text-col font-medium text-primary">${escape(item.businessUnit)}</span></p>
				<p class="font-light text-base">Class: ${item.class === "class1" ? `<span class="text-base text-col font-medium text-red-600">1/A</span>` : `${item.class === "class2" ? `<span class="text-base text-col font-medium text-error">2/B</span>` : `${item.class === "class3" ? `<span class="text-base text-col font-medium text-error">3/C</span>` : `${item.class === "class4" ? `<span class="text-base text-col font-medium text-error">4/D</span>` : `<span class="text-base text-col font-medium text-error">None</span>`}`}`}`}</p></div>
			<div class="flex items-center justify-center min-[640px]:justify-end mt-6 sm:mt-0 min-w-[50%] min-[720px]:min-w-[40%] xl:min-w-[30%] ">${showCheckIcon ? `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: "text-xl text-green-600 scale-150 pr-1 sm:mr-4 sm:pr-0",
      icon: "material-symbols:check-circle"
    },
    {},
    {}
  )}` : ``}
				<a href="${"/items/" + escape(item.id, true) + "/edit"}" class="btn btn-outline z-10">Edit Item</a>
				${validate_component(Modal, "Modal").$$render($$result, { label: item.id, checked: modalOpen }, {}, {
    actions: () => {
      return `<div slot="actions" class="flex w-full items-center justify-center space-x-2"><label${add_attribute("for", item.id, 0)} class="btn btn-outline">Cancel</label>
						<form action="?/deleteItem" method="POST"><input type="hidden" name="id"${add_attribute("value", item.id, 0)}>
							<button type="submit" class="btn btn-error" ${""}>Delete</button></form></div>`;
    },
    heading: () => {
      return `<div slot="heading"><h3 class="text-2xl">Delete ${escape(item.name)}</h3>
						<p class="text-base font-normal mt-2">Are you sure you want to delete this item? Once deleted, the item cannot be restored.
						</p></div>`;
    },
    trigger: () => {
      return `<span slot="trigger" class="btn btn-error ml-2 z-10 relative">Delete</span>`;
    }
  })}</div></div></div>

	<div class="collapse-content">${item.country === "guatemala" ? `${item.process === "productSubmission" ? `${validate_component(Checklist, "Checklist").$$render($$result, { tasks: tasksGuaPS, item }, {}, {})}` : `${item.process === "productRenewal" ? `${validate_component(Checklist, "Checklist").$$render($$result, { tasks: tasksGuaPR, item }, {}, {})}` : ``}`}` : `${item.country === "honduras" ? `${item.process === "productSubmission" ? `${validate_component(Checklist, "Checklist").$$render($$result, { tasks: tasksHonPS, item }, {}, {})}` : `${item.process === "productRenewal" ? `${validate_component(Checklist, "Checklist").$$render($$result, { tasks: tasksHonPR, item }, {}, {})}` : ``}`}` : `${item.country === "elSalvador" ? `${item.process === "productSubmission" ? `${validate_component(Checklist, "Checklist").$$render($$result, { tasks: tasksSalPS, item }, {}, {})}` : `${item.process === "productRenewal" ? `${validate_component(Checklist, "Checklist").$$render($$result, { tasks: tasksSalPR, item }, {}, {})}` : ``}`}` : `${item.country === "nicaragua" ? `${item.process === "productSubmission" ? `${item.class === "class1" ? `${validate_component(Checklist, "Checklist").$$render($$result, { tasks: tasksNicPSclass1, item }, {}, {})}` : `${item.class === "class2" ? `${validate_component(Checklist, "Checklist").$$render($$result, { tasks: tasksNicPSclass2, item }, {}, {})}` : `${item.class === "class3" ? `${validate_component(Checklist, "Checklist").$$render($$result, { tasks: tasksNicPSclass3, item }, {}, {})}` : `${item.class === "class4" ? `${validate_component(Checklist, "Checklist").$$render($$result, { tasks: tasksNicPSclass4, item }, {}, {})}` : ``}`}`}`}` : `${item.process === "productRenewal" ? `${validate_component(Checklist, "Checklist").$$render($$result, { tasks: tasksNicPR, item }, {}, {})}` : ``}`}` : `${item.country === "costaRica" ? `${item.process === "productSubmission" ? `${item.class === "class2" ? `${validate_component(Checklist, "Checklist").$$render($$result, { tasks: tasksCRPSclass2, item }, {}, {})}` : `${item.class === "class3" ? `${validate_component(Checklist, "Checklist").$$render($$result, { tasks: tasksCRPSclass3, item }, {}, {})}` : `${item.class === "class4" ? `${validate_component(Checklist, "Checklist").$$render($$result, { tasks: tasksCRPSclass4, item }, {}, {})}` : ``}`}`}` : `${item.process === "productRenewal" ? `${validate_component(Checklist, "Checklist").$$render($$result, { tasks: tasksCRPR, item }, {}, {})}` : ``}`}` : `${item.country === "panama" ? `${item.process === "productSubmission" ? `${item.class === "class1" ? `${validate_component(Checklist, "Checklist").$$render($$result, { tasks: tasksPanPSclass1, item }, {}, {})}` : `${item.class === "class2" ? `${validate_component(Checklist, "Checklist").$$render($$result, { tasks: tasksPanPSclass2, item }, {}, {})}` : `${item.class === "class3" ? `${validate_component(Checklist, "Checklist").$$render($$result, { tasks: tasksPanPSclass3, item }, {}, {})}` : `${item.class === "class4" ? `${validate_component(Checklist, "Checklist").$$render($$result, { tasks: tasksPanPSclass4, item }, {}, {})}` : ``}`}`}`}` : `${item.process === "productRenewal" ? `${item.class === "class1" || "class2" ? `${validate_component(Checklist, "Checklist").$$render($$result, { tasks: tasksPanPRclass1and2, item }, {}, {})}` : `${item.class === "class3" || "class4" ? `${validate_component(Checklist, "Checklist").$$render($$result, { tasks: tasksPanPRclass3and4, item }, {}, {})}` : ``}`}` : ``}`}` : ``}`}`}`}`}`}</div></div>`;
});
export {
  MyItem as M
};
