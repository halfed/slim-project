<?php
abstract class Mapper {
    protected $db;
    public function __construct($db) {
        $this->db = $db;
    }
}


class IndividualMovie extends Mapper
{
    public function currentMovie ($movieId) {
	   	$sql = "SELECT * FROM movies WHERE movie_id = ". $movieId;
	   	$stmt = $this->db->prepare($sql);
	    //$resultCheckUser = $dbh->query($sqlCheckUser);

	    $result = $stmt->execute();

		$results = [];
        while($result2 = $stmt->fetch()) {
            $results[] = $result2;
        }
	    print_r(json_encode($results));
	}
}

class AllMovies extends Mapper 
{
	public function getAllMovies () {
		$sql = "SELECT a.movie_id, a.movie_name, a.movie_thumb, a.movie_img_lg, a.movie_release_date, a.movie_rating, b.movie_description 
				FROM movies as a
				LEFT JOIN movie_details as b
				ON a.movie_id = b.movie_name_id
				ORDER BY a.movie_name ASC
				LIMIT 1";
		$stmt = $this->db->prepare($sql);
		$result = $stmt->execute();
		$results = [];
        while($result2 = $stmt->fetch()) {
            $results[] = $result2;
        }
	    print_r(json_encode($results));
	}
}

?>