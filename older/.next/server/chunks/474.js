"use strict";
exports.id = 474;
exports.ids = [474];
exports.modules = {

/***/ 5474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "WS": () => (/* binding */ LessonProvider),
  "RN": () => (/* binding */ useLesson)
});

// UNUSED EXPORTS: LessonContext

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./lib/getLesson.ts
const getLesson = async (course, module, lesson, component, content, token)=>{
    const response = await fetch(`${"https://cadastro.englishinbrazil.com.br"}/api/aluno/curso/${course}/${module}/${lesson}/${component}/${content}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    });
    const classroom = await response.json();
    return classroom;
};
const checkLesson = async (course, module, lesson, component, content, token)=>{
    const response = await fetch(`${"https://cadastro.englishinbrazil.com.br"}/api/aluno/eventoConclusao`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            aula_slug: lesson,
            curso_slug: course,
            modulo_slug: module,
            componente: component,
            componente_id: content
        })
    });
    const checkedLesson = await response.json();
    const { ret  } = checkedLesson;
    if (ret == "Atividade concluida.") {
        return true;
    } else {
        return false;
    }
};

;// CONCATENATED MODULE: ./lib/Context/Lesson.tsx




const LessonContextPropsDefault = {
    activity: {},
    activityPrevious: {},
    activityNext: {},
    activityCurrent: 0,
    activityConfetti: false,
    data: {},
    loadClass: async ()=>{},
    handleCheckLesson: async ()=>{},
    canClose: false,
    setCanClose: async ()=>{},
    isSubmitting: false
};
const LessonContext = /*#__PURE__*/ (0,external_react_.createContext)(LessonContextPropsDefault);
const useLesson = ()=>{
    return (0,external_react_.useContext)(LessonContext);
};
const LessonProvider = ({ children  })=>{
    const router = (0,router_.useRouter)();
    const { 0: activity , 1: setActivity  } = (0,external_react_.useState)();
    const { 0: menu , 1: setMenu  } = (0,external_react_.useState)();
    const { 0: isSubmitting , 1: setIsSubmitting  } = (0,external_react_.useState)(false);
    const { 0: activityPrevious , 1: setActivityPrevious  } = (0,external_react_.useState)(null);
    const { 0: activityNext , 1: setActivityNext  } = (0,external_react_.useState)(null);
    const { 0: activityCurrent , 1: setActivityCurrent  } = (0,external_react_.useState)(0);
    const { 0: activityConfetti , 1: setActivityConfetti  } = (0,external_react_.useState)(false);
    const { 0: canClose , 1: setCanClose  } = (0,external_react_.useState)(false);
    const { 0: data , 1: setData  } = (0,external_react_.useState)({});
    const { 0: atividadeConcluida , 1: setAtividadeConcluida  } = (0,external_react_.useState)(false);
    const loadClass = async (course, module, lesson, component, content, token)=>{
        const classroom = await getLesson(course, module, lesson, component, content, token);
        let menu = [];
        await classroom.conteudo?.map((section, index)=>{
            if (section.group == "infobox") {
                const infobox = menu.find((item)=>item.group === "infobox");
                if (infobox) {
                    return menu[menu.findIndex((item)=>item.group === "infobox")].item.push({
                        ...section
                    });
                }
                return menu.push({
                    group: "infobox",
                    item: [
                        section
                    ]
                });
            }
            return menu.push({
                group: null,
                item: section
            });
        });
        setMenu(menu);
        setActivity(classroom);
        const { conteudo =[]  } = classroom;
        let posicaoConteudo = conteudo.findIndex((item)=>item.__component == component && item.id == content);
        const dadoConteudo = conteudo[posicaoConteudo];
        const conteudoAnterior = posicaoConteudo > 0 ? conteudo[posicaoConteudo - 1] : null;
        const conteudoPosterior = conteudo[posicaoConteudo + 1];
        setActivityCurrent(posicaoConteudo);
        setActivityPrevious(conteudoAnterior);
        setActivityNext(conteudoPosterior);
        setData({});
        setData({
            ...dadoConteudo,
            course,
            module,
            lesson
        });
        setAtividadeConcluida(dadoConteudo?.atividadeConcluida);
        setCanClose(dadoConteudo?.atividadeConcluida);
        setIsSubmitting(false);
    };
    const handleCheckLesson = async (course, module, lesson, component, content, token)=>{
        setIsSubmitting(true);
        // if (canClose || atividadeConcluida) {
        const activityConfetti = await checkLesson(course, module, lesson, component, content, token);
        if (activityConfetti) {
            setActivityConfetti(true);
            setTimeout(()=>setActivityConfetti(false), 6000);
            if (activityNext) {
                router.push(`/class/${course}/${module}/${lesson}/${activityNext.__component}/${activityNext.id}`);
            }
        } else {
            router.reload();
        }
        loadClass(course, module, lesson, component, content, token);
    // } else {
    //   toast.error(
    //     "A atividade deve ser finalizada antes de marcar a aula como concluida."
    //   )
    //   setIsSubmitting(false)
    // }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(LessonContext.Provider, {
        value: {
            menu,
            activity,
            activityPrevious,
            activityNext,
            activityCurrent,
            activityConfetti,
            data,
            loadClass,
            handleCheckLesson,
            canClose,
            setCanClose,
            atividadeConcluida,
            isSubmitting
        },
        children: children
    });
};


/***/ })

};
;