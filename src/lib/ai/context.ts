export function createConversationContext(plots: any[]) {
    
    return plots.map((plot) => ({
        id: plot.id,
        nombre: plot.name,
        cultivo: plot.cropName,
        variedad: plot.variety,
        fechaSiembra: plot.plantingDate,
        ubicacion: {
            latitud: plot.latitude,
            longitud: plot.longitude,
        },
        clima: plot.weatherCache,
    }));
}