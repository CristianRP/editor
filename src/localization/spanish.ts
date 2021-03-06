import {defaultStrings, editorLocalization} from "surveyjs-editor"

var spanishTranslation: {
    // strings for survey templates
    survey: {
        dropQuestion: "Por favor coloque una pregunta aquí";
        copy: "Copiar";
        addToToolbox: "Agregar al toolbox";
        deletePanel: "Eliminar panel";
        deleteQuestion: "Eliminar pregunta";
    };
    // strings for question types
    qt: {
        checkbox: "Checkbox";
        comment: "Comentario";
        dropdown: "Dropdown";
        file: "Archivo";
        html: "Html";
        matrix: "Matriz (opción única)";
        matrixdropdown: "Matriz (opción multiple)";
        matrixdynamic: "Matriz (filas dinámicas)";
        multipletext: "Texto multiple";
        panel: "Panel";
        radiogroup: "Radiogroup";
        rating: "Rating";
        text: "Texto simple";
    };
    // strings for editor
    ed: {
        addNewPage: "Agregar nueva página";
        newPageName: "pagina";
        newQuestionName: "pregunta";
        newPanelName: "panel";
        testSurvey: "Probar encuesta";
        testSurveyAgain: "Probar encuesta de nuevo";
        testSurveyWidth: "Ancho de la encuesta: ";
        embedSurvey: "Embeber encuesta";
        saveSurvey: "Guardar encuesta";
        designer: "Diseñador de encuesta";
        jsonEditor: "Editar JSON";
        undo: "Deshacer";
        redo: "Rehacer";
        options: "Opciones";
        generateValidJSON: "Generar JSON válido";
        generateReadableJSON: "Generar JSON legible";
        toolbox: "Toolbox";
        delSelObject: "Eliminar objecto seleccionado";
        correctJSON: "Por favor, corrige tu JSON";
        surveyResults: "Resultados de encuesta: ";
    };
    // strings for property editors
    pe: {
        apply: "Aplicar";
        ok: "Aceptar";
        cancel: "Cancelar";
        reset: "Reiniciar";
        close: "Cerrar";
        delete: "Eliminar";
        addNew: "Agregar nuevo";
        removeAll: "Eliminar todo";
        edit: "Editar";
        empty: "<vacio>";
        fastEntry: "Entrada rápida";
        formEntry: "Entrada con formulario";
        testService: "Probar el servicio";
        expressionHelp: "Por favor ingresa una expresión booleana. Debe retornar verdadero para mantener la pregunta/página visible. Por ejemplo: {pregunta1} = 'valor1' or ({pregunta2} = 3 and {pregunta3} < 5)";
        propertyIsEmpty: "Por favor ingresa un valor dentro de la propiedad";
        value: "Valor";
        text: "Texto";
        required: "¿Requerido?";
        columnEdit: "Editar columna: {0}";
        itemEdit: "Editar item: {0}";
        hasOther: "Tiene otro item";
        name: "Nombre";
        title: "Título";
        cellType: "Tipo de celda";
        colCount: "Conteo de columnas";
        choicesOrder: "Seleccionar orden de opciones";
        visible: "¿Es visible?";
        isRequired: "¿Es requerido?";
        startWithNewLine: "¿Empezar en una nueva linea?";
        rows: "Conteo de filas";
        placeHolder: "Texto de referencia";
        showPreview: "¿Mostrar vista previa de la imagen?";
        storeDataAsText: "Guardar el contenido del archivo en un JSON como texto";
        maxSize: "Tamaño máximo del archivo en bytes";
        imageHeight: "Altura de la imagen";
        imageWidth: "Ancho de la imagen";
        rowCount: "Conteo de filas";
        addRowText: "Texto del botón para agregar filas";
        removeRowText: "Texto del botón para eliminar filas";
        minRateDescription: "Descripción de calificación mínima";
        maxRateDescription: "Descripción de calificación máxima";
        inputType: "Tipo de entrada";
        optionsCaption: "Título de opción";
        qEditorTitle: "Editar pregunta: {0}";
        tabs: {
            general: "General";
            fileOptions: "Opciones";
            html: "Editor de Html";
            columns: "Columnas";
            rows: "Filas";
            choices: "Opciones";
            visibleIf: "Visible si";
            rateValues: "Valores de calificación";
            choicesByUrl: "Opciones desde la Web";
            matrixChoices: "Opciones por defecto";
            multipleTextItems: "Entradas de texto";
            validators: "Validadores";
        };
        editProperty: "Editar propiedad '{0}'";
        items: "[ Items: {0} ]";
        enterNewValue: "Por favor, ingresa el valor.";
        noquestions: "No hay ninguna pregunta en la encuesta.";
        createtrigger: "Por favor, crea un disparador";
        triggerOn: "Encendido ";
        triggerMakePagesVisible: "Hacer visibles las páginas:";
        triggerMakeQuestionsVisible: "Hacer visibles las preguntas:";
        triggerCompleteText: "Completar la encuesta, si tiene éxito.";
        triggerNotSet: "El disparador no está preparado";
        triggerRunIf: "Ejecutar si";
        triggerSetToName: "Cambiar el valor de: ";
        triggerSetValue: "a: ";
        triggerIsVariable: "No colocar la variable en el resultado de la encuesta";
        verbChangeType: "Cambiar tipo ";
        verbChangePage: "Cambiar página ";
    };
    // strings for operators
    op: {
        empty: "esta vacío";
        notempty: "no esta vacío";
        equal: "es igual a";
        notequal: "no es igual a";
        contains: "contiene";
        notcontains: "no contiene";
        greater: "mayor";
        less: "menor";
        greaterorequal: "mayor o igual";
        lessorequal: "menor o igual";
    };
    // strings for embed window
    ew: {
        angular: "Usar versión para Angular";
        jquery: "Usar versión para jQuery";
        knockout: "Usar versión para Knockout";
        react: "Usar versión para React";
        vue: "Usar versión para Vue";
        bootstrap: "Para bootstrap framework";
        standard: "No bootstrap";
        showOnPage: "Mostrar encuesta en una página";
        showInWindow: "Mostrar encuesta en una ventana";
        loadFromServer: "Cargar Survey JSON desde el servidor";
        titleScript: "Scripts y estilos";
        titleHtml: "HTML";
        titleJavaScript: "JavaScript";
    };
    // strings of properties
    p: {
        name: "nombre";
        title: {
            name: "titulo";
            title: "Dejalo vacio, si es el mismo que 'Nombre'";
        };
        survey_title: {
            name: "titulo";
            title: "Sé mostrará en cada página.";
        };
        page_title: {
            name: "titulo";
            title: "Título de página";
        };
    };
};

editorLocalization.locales["es"] = defaultStrings;
