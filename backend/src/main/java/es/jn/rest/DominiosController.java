package es.jn.rest;

import java.time.LocalDate;
import java.util.List;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.webmvc.PersistentEntityResourceAssembler;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import es.jn.entidades.AreaDeConocimiento;
import es.jn.repositorios.AreaDAO;

@RepositoryRestController
@Configuration
public class DominiosController {

	private AreaDAO areaDAO;

	public DominiosController(AreaDAO areaDAO) {
		this.areaDAO = areaDAO;
	}

	@GetMapping("/dominios/{id}/search/areas")
	@ResponseBody
	public List<AreaDeConocimiento> getAreasDelDominio(@PathVariable Long id, @RequestParam("fechaInicioInforme") LocalDate fechaInicioInforme, 
			@RequestParam("fechaFinInforme") LocalDate fechaFinInforme, PersistentEntityResourceAssembler assembler) {
		Informe informe = empleadoBaseDAO.getInformeHorasTrabajadas(id, fechaInicioInforme, fechaFinInforme);

		return List.of(informe);
	}

}