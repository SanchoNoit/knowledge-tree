package es.jn.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import es.jn.entidades.Leccion;

@RepositoryRestResource(path = "lecciones", itemResourceRel = "leccion", collectionResourceRel = "lecciones")
public interface LeccionDAO extends JpaRepository<Leccion, Long> {
	
}
	
