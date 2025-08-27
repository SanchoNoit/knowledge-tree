package es.jn.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import es.jn.entidades.Concepto;

@RepositoryRestResource(path = "conceptos", itemResourceRel = "concepto", collectionResourceRel = "conceptos")
public interface ConceptoDAO extends JpaRepository<Concepto, Long> {
	
}
	
