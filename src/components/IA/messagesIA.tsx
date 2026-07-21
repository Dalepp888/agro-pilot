export default function MessagesIa() {
    return (
        <section className="flex-1 overflow-y-auto px-container-padding pb-48 flex flex-col gap-6 custom-scrollbar">
            <div className="max-w-[80%] self-start flex flex-col gap-1">
                <div className="ai-bubble p-4 rounded-2xl text-on-surface">
                    <p>¡Hola! Soy tu asistente de AgroPilot. He analizado los datos meteorológicos de la próxima semana
                        y el estado de tu <strong>Parcela Norte</strong>. ¿En qué puedo ayudarte hoy?</p>
                </div>
                <span className="text-[11px] text-on-surface-variant px-2">09:15 AM</span>
            </div>

            <div className="max-w-[70%] self-end flex flex-col items-end gap-1">
                <div className="user-bubble p-4 rounded-2xl text-on-surface shadow-md">
                    <p>¿Debo regar el maíz hoy? Veo nubes en el horizonte pero el suelo se siente seco.</p>
                </div>
                <span className="text-[11px] text-on-surface-variant px-2">09:18 AM</span>
            </div>

            <div className="max-w-[80%] self-start flex flex-col gap-1">
                <div className="ai-bubble p-4 rounded-2xl text-on-surface">
                    <p>Según los sensores de humedad en la Parcela Norte (Día 18), la capa freática está al 32%, lo cual
                        es bajo para el maíz en esta etapa de crecimiento.</p>
                    <p className="mt-3">Sin embargo, el pronóstico indica un <strong>85% de probabilidad de lluvia
                        moderada</strong> para las 16:00h de hoy (aprox. 12mm). Te recomiendo <strong>posponer el
                            riego</strong> por ahora. Si no llueve al final del día, programaremos un riego ligero de 20
                        minutos.</p>
                </div>
                <span className="text-[11px] text-on-surface-variant px-2">09:18 AM</span>
            </div>

            <div className="max-w-[70%] self-end flex flex-col items-end gap-1">
                <div className="user-bubble p-4 rounded-2xl text-on-surface shadow-md">
                    <p>Entendido. ¿Y qué hay de la ventana de plantación para los tomates? ¿Es buen momento para empezar
                        el semillero?</p>
                </div>
                <span className="text-[11px] text-on-surface-variant px-2">09:20 AM</span>
            </div>

            <div className="max-w-[80%] self-start flex flex-col gap-1">
                <div className="ai-bubble p-4 rounded-2xl text-on-surface">
                    <p>Para la variedad <em>Roma</em> que tienes en inventario, la ventana óptima en tu zona comienza en
                        10 días. La temperatura nocturna actual (12°C) es un poco baja para una germinación óptima sin
                        calefacción.</p>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="bg-white/5 border border-white/10 p-3 rounded-lg">
                            <p className="text-[12px] text-on-surface-variant">Ventana recomendada</p>
                            <p className="font-bold text-tertiary">22 Mar - 05 Abr</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-3 rounded-lg">
                            <p className="text-[12px] text-on-surface-variant">Temp. Mínima Suelo</p>
                            <p className="font-bold text-secondary">18°C</p>
                        </div>
                    </div>
                </div>
                <span className="text-[11px] text-on-surface-variant px-2">09:21 AM</span>
            </div>

            <div className="self-start flex flex-col gap-1">
                <div className="flex items-center gap-3 text-on-surface-variant font-label-sm px-2 animate-pulse-soft">
                    <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        <span className="w-1.5 h-1.5 bg-primary rounded-full delay-150"></span>
                        <span className="w-1.5 h-1.5 bg-primary rounded-full delay-300"></span>
                    </div>
                    La IA está analizando la información...
                </div>
            </div>
        </section>
    )
}